/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropbox } from 'dropbox';
import { useState } from 'react';

export const useFilePreview = (dbx: Dropbox) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileClick = async (file: any) => {
    if (['.jpg', '.png', '.pdf'].some((ext) => file.name.endsWith(ext))) {
      try {
        const tempLink = await dbx.filesGetTemporaryLink({
          path: file.path_lower,
        });
        setSelectedFile(tempLink.result.link); // Guardamos el tempLink
        setIsModalOpen(true);
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
  };

  return {
    selectedFile,
    isModalOpen,
    error,
    handleFileClick,
    handleClosePreview,
  };
};
