import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useSaveCodeMutation } from './Api/codeApi';

const Compiler = forwardRef(({ title, setTitle }, ref) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [output, setOutput] = useState('');
  const { user } = useSelector((state) => state.userSlice);
  const [saveCode] = useSaveCodeMutation();

  useEffect(() => {
    const updateOutput = () => {
      const combinedOutput = `
        <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
        </html>
      `;
      setOutput(combinedOutput);
    };

    updateOutput();
  }, [html, css, js]);

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
      <SplitPane split="horizontal" defaultSize="50%">
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

        {/* Bottom Pane for Output */}
        <div className="bg-white overflow-hidden border-t-2 border-black h-full">
          <iframe srcDoc={output} width="100%" height="100%" title="Output" />
        </div>
      </SplitPane>
    </div>
  );
});

export default Compiler;
