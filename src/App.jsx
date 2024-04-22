// App.jsx
import React from 'react';
import Form from './forms/Form';
import { FileSend } from './components/FileSend';


const App = () => {
  return (
    <div className="container mx-auto mt-8">

      <Form />
      <FileSend></FileSend>
    </div>
  );
};

export default App;
