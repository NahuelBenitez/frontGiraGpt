// Form.js
import React, { useState } from 'react';
import InputText from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import SelectButton from '../components/SelectButton';

const Form = () => {
  const [formData, setFormData] = useState({
    issueType: '',
    summary: '',
    description: '',
  });
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    setFormData({
      ...formData,
      issueType: value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-300 p-6 rounded-lg">
        <div className="mb-4">
          <SelectButton value={selectedValue} onChange={handleSelectChange} />
        </div>
        <div className="mb-4">
          <InputText 
            type="text"
            name="summary"
            placeholder="Ingrese el título"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <TextArea 
            name="description"
            placeholder="Ingrese la descripción"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Button text="Enviar" bgColor="blue-500" />
        </div>
      </form>
    </div>
  );
};

export default Form;
