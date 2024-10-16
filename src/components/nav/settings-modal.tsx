// src/components/user/SettingsModal.tsx
import { Box, Button, Modal, Typography } from '@mui/material';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SettingsModal({ open, onClose }: SettingsModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="settings-modal-title"
      aria-describedby="settings-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          borderRadius: '8px',
          p: 4,
        }}
      >
        <Typography id="settings-modal-title" variant="h6" component="h2">
          Funcionalidades Próximamente
        </Typography>
        <Typography id="settings-modal-description" sx={{ mt: 2 }}>
          Pronto podrás configurar tu cuenta y personalizar tu experiencia.
        </Typography>
        <Button onClick={onClose} sx={{ mt: 3 }} variant="contained">
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}
