import { Box, Modal, Typography } from '@mui/material';

interface FileModalProps {
  open: boolean;
  onClose: () => void;
  file: string | null;
}

export default function FileModal({ open, onClose, file }: FileModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          height: 'fit-content',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Previsualización del archivo
        </Typography>
        {file ? (
          file.endsWith('.pdf') ? (
            <embed
              src={file}
              width="100%"
              height="600px"
              type="application/pdf"
            />
          ) : (
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
