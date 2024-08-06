import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetCodeByIdQuery, useUpdateCodeMutation } from '../Api/codeApi';
import { useParams } from 'react-router';

const CodeEditor = forwardRef(({ updatetitle, setUpdateTitle }, ref) => {
  const { id } = useParams();
  const { data } = useGetCodeByIdQuery(id);

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [outputState, setOutputState] = useState({
    output: '',
    recentOutputs: []
  });
  const [selectedOutput, setSelectedOutput] = useState('');
  const [logs, setLogs] = useState([]);
  const [isConsoleVisible, setIsConsoleVisible] = useState(false);
  const { user } = useSelector((state) => state.userSlice);
  const [updateCode] = useUpdateCodeMutation();

  useEffect(() => {
    if (data) {
      setHtml(data.data.html);
      setCss(data.data.css);
      setJs(data.data.js);
      setOutputState((prevState) => ({
        ...prevState,
        output: data.data.output,
        recentOutputs: [data.data.output, ...prevState.recentOutputs]
      }));
      setSelectedOutput(data.data.output);
    }
  }, [data]);

  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, args.map(arg => JSON.stringify(arg)).join(' ')]);
      originalConsoleLog(...args);
    };

    const updateOutput = () => {
      setLogs([]);
      const combinedOutput = `
        <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            (function() {
              window.console.log = function(...args) {
                window.parent.postMessage({ type: 'log', data: args }, '*');
              };
              try {
                ${js}
              } catch (e) {
                console.log('Error:', e.message);
              }
            })();
          </script>
        </body>
        </html>
      `;
      setOutputState((prevState) => ({
        output: combinedOutput,
        recentOutputs: [combinedOutput, ...prevState.recentOutputs.slice(0, 4)]
      }));
      setSelectedOutput(combinedOutput);
    };

    updateOutput();

    return () => {
      console.log = originalConsoleLog;
    };
  }, [html, css, js]);

  useEffect(() => {
    const handleConsoleMessages = (event) => {
      if (event.data.type === 'log') {
        setLogs((prevLogs) => [...prevLogs, ...event.data.data.map(arg => JSON.stringify(arg))]);
      }
    };

    window.addEventListener('message', handleConsoleMessages);

    return () => {
      window.removeEventListener('message', handleConsoleMessages);
    };
  }, []);

  const handleUpdate = async () => {
    const codeData = {
      html,
      css,
      js,
      output: outputState.output,
      title: updatetitle,
    };

    try {
      await updateCode({ id: data?.data?._id, body: codeData, token: user.token }).unwrap();
      toast.success('Saved successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to save');
    }
  };

  useImperativeHandle(ref, () => ({
    handleUpdate,
  }));

  const toggleConsoleVisibility = () => {
    setIsConsoleVisible(!isConsoleVisible);
  };

  return (
    <div className="h-screen flex flex-col">
      <SplitPane split="horizontal" defaultSize="50%">
        <div className="flex flex-col bg-blue-gray-800 h-full">
          <SplitPane split="vertical" minSize={50}>
            <div className="h-full overflow-auto">
              <div className="bg-black text-white p-2">
                <h1>HTML</h1>
              </div>
              <CodeMirror
                value={html}
                height="calc(100% - 40px)"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setHtml(value)}
              />
            </div>
            <div className="h-full overflow-auto">
              <div className="bg-black text-white p-2">
                <h1>CSS</h1>
              </div>
              <CodeMirror
                value={css}
                height="calc(100% - 40px)"
                theme="dark"
                extensions={[javascript({ css: true })]}
                onChange={(value) => setCss(value)}
              />
            </div>
            <div className="h-full overflow-auto">
              <div className="bg-black text-white p-2">
                <h1>JS</h1>
              </div>
              <CodeMirror
                value={js}
                height="calc(100% - 40px)"
                theme="dark"
                extensions={[javascript({ js: true })]}
                onChange={(value) => setJs(value)}
              />
            </div>
          </SplitPane>
        </div>

        <div className="bg-white overflow-hidden border-t-2 border-black h-full">
          <iframe srcDoc={selectedOutput} width="100%" height="100%" title="Output" />
        </div>
        
        {isConsoleVisible && (
            <div className="overflow-hidden h-full bg-black text-white p-2">
              <h2>Console</h2>
              <div>
                {logs.map((log, index) => (
                  <div key={index} className="console-log">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}
      </SplitPane>
      <div className="ml-5 h-[25px] bg-black text-white">
        <button onClick={toggleConsoleVisibility} className="font-bold">
          Console
        </button>
      </div>
    </div>
  );
});

export default CodeEditor;
