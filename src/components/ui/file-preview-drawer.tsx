import { Box, SwipeableDrawer, Typography } from '@mui/material';
import React from 'react';

interface FilePreviewDrawerProps {
  open: boolean;
  onClose: () => void;
  file: string | null;
}

const FilePreviewDrawer: React.FC<FilePreviewDrawerProps> = ({
  open,
  onClose,
  file,
}) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      PaperProps={{
        sx: {
          height: '70vh',
          borderRadius: '16px 16px 0 0',
          transition: 'transform 0.3s ease-in-out',
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography id="drawer-title" variant="h6" component="h2">
          Previsualización del archivo
        </Typography>
        {file ? (
          file.endsWith('.pdf') ? (
            <embed
              src={file}
              width="100%"
              height="100%"
              type="application/pdf"
              style={{ maxHeight: '60vh' }}
            />
          ) : (
            <img
              src={file}
              alt="Previsualización"
              style={{ width: '100%', height: 'auto', maxHeight: '60vh' }}
            />
          )
        ) : (
          <Typography variant="body1">No se pudo cargar el archivo.</Typography>
        )}
      </Box>
    </SwipeableDrawer>
  );
};

export default FilePreviewDrawer;
