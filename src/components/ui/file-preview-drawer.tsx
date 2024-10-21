import { Box, SwipeableDrawer, Typography } from '@mui/material';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import React from 'react';

interface FilePreviewDrawerProps {
  open: boolean;
  onClose: () => void;
  file: string | null;
  fileType: string | null;
}

const FilePreviewDrawer: React.FC<FilePreviewDrawerProps> = ({
  open,
  onClose,
  file,
  fileType,
}) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      PaperProps={{
        sx: {
          height: '80vh',
          borderRadius: '16px 16px 0 0',
          transition: 'transform 0.3s ease-in-out',
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
          height: '95%',
        }}
      >
        <Typography id="drawer-title" variant="h6" component="h2">
          Previsualización del archivo
        </Typography>
        {file ? (
          fileType === '.pdf' ? (
            <EmbedPDF
              mode="inline"
              style={{ width: 'auto', height: '100%' }}
              documentURL={file}
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
