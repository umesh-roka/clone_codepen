import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useSaveCodeMutation } from './Api/codeApi';

const Compiler = forwardRef(({ title, setTitle }, ref) => {


  const [isconsole,setConsole] = useState(false);

  const togglecontent =()=>{
    setConsole(!isconsole)
  }

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [output, setOutput] = useState('');
  const [logs, setLogs] = useState([]);
  const { user } = useSelector((state) => state.userSlice);
  const [saveCode] = useSaveCodeMutation();

  useEffect(() => {
    // Preserve the original console.log
    const originalConsoleLog = console.log;
    // Override console.log to capture logs
    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, args.map(arg => JSON.stringify(arg)).join(' ')]);
      originalConsoleLog(...args);
    };

    const updateOutput = () => {
      setLogs([]); // Clear logs on every update
      const combinedOutput = `
        <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            (function() {
              // Capture console.log and send it to the parent window
              window.console.log = function(...args) {
                window.parent.postMessage({ type: 'log', data: args }, '*');
              };
              
              // Execute user-provided JavaScript
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
      setOutput(combinedOutput);
    };

    updateOutput();

    // Cleanup console log override on unmount
    return () => {
      console.log = originalConsoleLog;
    };
  }, [html, css, js]);

  // Listen for messages from iframe
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

  const handleSave = async () => {
    const codeData = {
      html,
      css,
      js,
      output,
      title,
    };

    try {
      await saveCode({ body: codeData, token: user.token }).unwrap();
      toast.success('Saved');
    } catch (error) {
      toast.error('Failed to save');
    }
  };

  useImperativeHandle(ref, () => ({
    handleSave
  }));

  return (
    <div className="h-screen flex flex-col">
      <SplitPane split="horizontal" defaultSize="auto">
        {/* Top Pane for Editors */}
        <div className="flex flex-col bg-blue-gray-800 h-full">
          <SplitPane split="vertical" minSize={50}>
            <div className="h-full overflow-auto">
              <div className="bg-black text-white p-2">
                <h1>HTML</h1>
              </div>
              <CodeMirror
                value={html}
                height="calc(100% - 40px)"
                theme={"dark"}
                extensions={[javascript({ js: true })]}
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
                theme={"dark"}
                extensions={[javascript({ js: true })]}
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
                theme={'dark'}
                extensions={[javascript({ js: true })]}
                onChange={(value) => setJs(value)}
              />
            </div>
          </SplitPane>
        </div>

        {/* Bottom Pane for Output and Console */}
        <div className="bg-white overflow-hidden border-t-2 border-black h-full">
          <iframe srcDoc={output} width="100%" height="100%" title="Output" />
        
        </div>
        {isconsole && ( <div className="   overflow-hidden h-full   bg-black text-white p-2 ">
            <h2>Console</h2>
            <div>
              {logs.map((log, index) => (
                <div key={index} className="console-log">
                  {log}
                </div>
              ))}
            </div>
          </div>)}
      </SplitPane>
      <div className='ml-5 h-[25px] bg-black text-white'>
        <button onClick={togglecontent} className=' font-bold' > console</button>
      </div>

    
    </div>
  );
});

export default Compiler;
