import { useState } from "react"

export function FileSend() {
    const [fileData, setFileData] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!fileData) {
        console.log("Seleccione un archivo");
        return;
      }
      
      const formData = new FormData();
      formData.append('datos', fileData);
      
      try {
        const response = await fetch('http://localhost:3000/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log("Archivo subido con éxito:", data);
        } else {
          console.error("Error al subir el archivo:", response.statusText);
        }
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
        <button type="submit">Enviar archivo</button>
      </form>
    );
}