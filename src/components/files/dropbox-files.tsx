/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Box, CircularProgress, Grid, Typography } from '@mui/material';
import { Dropbox } from 'dropbox';
import { useEffect, useState } from 'react';
import { useFilePreview } from '../../hooks/use-file-preview'; // Importa tu hook
import { listFolderFiles } from '../../services/dropbox-service'; // Asumiendo que tienes este servicio configurado
import FileCard from './file-card';
import FileModal from './file-modal-preview';

export default function FilesComponent() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
  });

  // Usa el hook para manejo de previsualización y descarga
  const { selectedFile, isModalOpen, handleFileClick, handleClosePreview } =
    useFilePreview(dbx);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const allFiles = await listFolderFiles(
          '/Carpeta del Usuario/Órdenes',
          true,
        ); // Cambia el path si es necesario
        setFiles(allFiles);
      } catch (error) {
        setError('Error al cargar archivos de Dropbox');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFiles();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          width: '100%',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Archivos en la carpeta y subcarpetas
      </Typography>
      <Grid container spacing={2}>
        {files.map((file, index) => (
          <FileCard key={index} file={file} onFileClick={handleFileClick} />
        ))}
      </Grid>
      {/* Modal para previsualización */}
      <FileModal
        open={isModalOpen}
        onClose={handleClosePreview}
        file={selectedFile}
      />
    </Box>
  );
}
