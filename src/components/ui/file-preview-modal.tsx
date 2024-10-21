import { Box, Modal, Typography } from '@mui/material';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import { useEffect } from 'react';

interface FileModalProps {
  open: boolean;
  onClose: () => void;
  file: string | null;
  fileType: string | null;
}

export default function FileModal({
  open,
  onClose,
  file,
  fileType,
}: FileModalProps) {
  useEffect(() => {
    console.log('Modal abierto con archivo:', file);
  }, [file]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', // Ajustar el tamaño del modal
          height: '80%', // Ajustar el tamaño del modal
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Previsualización del archivo
        </Typography>
        {file ? (
          fileType === '.pdf' ? (
            <EmbedPDF
              mode="inline"
              style={{ width: '100%', height: '90%' }}
              documentURL={file}
            />
          ) : (
            // <embed
            //   src={file}
            //   title="PDF Preview"
            //   width="100%"
            //   height="600px"
            //   style={{ border: 'none' }}
            // ></embed>
            <img
              src={file}
              alt="Previsualización"
              style={{ width: '100%', height: 'auto' }}
            />
          )
        ) : (
          <Typography variant="body1">No se pudo cargar el archivo.</Typography>
        )}
      </Box>
    </Modal>
  );
}
