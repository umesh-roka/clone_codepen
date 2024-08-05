import React, { useRef, useState } from 'react'
import Header from '../../ui/Header';
import CodeEditor from './CodeEditor';
import { useGetCodeByIdQuery } from '../Api/codeApi';
import { useParams } from 'react-router';

const CodeEdit = () => {
  const{id} = useParams();
  const{data} = useGetCodeByIdQuery(id);
  const CodeEditorRef = useRef(null);
  const [updatetitle, setUpdateTitle] = useState(data?.data?.title || '');  return (
    <div>
      <Header CodeEditorRef={CodeEditorRef} updatetitle={updatetitle} setUpdateTitle={setUpdateTitle} />
      <CodeEditor ref={CodeEditorRef} updatetitle={updatetitle} setUpdateTitle={setUpdateTitle} />
    </div>
  )
}

export default CodeEdit
