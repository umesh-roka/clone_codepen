import React, { useRef, useState } from 'react';
import Header from '../ui/Header';
import Compiler from './Compiler';

const NewCode = () => {
  const compilerRef = useRef(null);
  const [title, setTitle] = useState('');

  return (
    <div>
      <Header compilerRef={compilerRef} title={title} setTitle={setTitle} />
      <Compiler ref={compilerRef} title={title} setTitle={setTitle} />
    </div>
  );
};



export default NewCode;
