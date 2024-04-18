// SelectButton.jsx
import React, { useState } from 'react';

const SelectButton = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
    >
      <option value="">Seleccione el tipo de Issue</option>
      <option value="History">History</option>
      <option value="Error">Error</option>
      <option value="Task">Task</option>
      <option value="Bug">Bug</option>
    </select>
  );
};

export default SelectButton;
