import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    projectKey: '',
    epicTitle: '',
    epicDescription: '',
    file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
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
          <label className="block text-sm font-medium text-gray-700">Clave del proyecto</label>
          <input
            type="text"
            name="projectKey"
            placeholder="Ingrese la clave del proyecto"
            value={formData.projectKey}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Título de la épica</label>
          <input
            type="text"
            name="epicTitle"
            placeholder="Ingrese el título de la épica"
            value={formData.epicTitle}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Descripción de la épica</label>
          <textarea
            name="epicDescription"
            placeholder="Ingrese la descripción de la épica"
            value={formData.epicDescription}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Subir archivo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
