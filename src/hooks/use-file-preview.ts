/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropbox } from 'dropbox';
import { useState } from 'react';

export const useFilePreview = (dbx: Dropbox) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null); // Almacena el tipo de archivo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileClick = async (file: any) => {
    // Verificamos extensiones compatibles
    const supportedExtensions = ['.jpg', '.png', '.pdf'];
    const fileExtension = file.name
      .slice(file.name.lastIndexOf('.'))
      .toLowerCase();

    if (supportedExtensions.includes(fileExtension)) {
      try {
        const tempLink = await dbx.filesGetTemporaryLink({
          path: file.path_lower,
        });
        setSelectedFile(tempLink.result.link); // Guardamos el enlace temporal
        setFileType(fileExtension); // Guardamos el tipo de archivo
        setIsModalOpen(true); // Abrimos el modal
      } catch (error) {
        setError('Este archivo no puede ser previsualizado.');
        console.error(error);
      }
    } else {
      setError('Este tipo de archivo no puede ser previsualizado.');
    }
  };

  const handleClosePreview = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
    setFileType(null); // Limpiamos el tipo de archivo al cerrar el modal
  };

  return {
    selectedFile,
    fileType, // Retornamos el tipo de archivo
    isModalOpen,
    error,
    handleFileClick,
    handleClosePreview,
  };
};
