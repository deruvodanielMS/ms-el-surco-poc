import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      style={{ backgroundColor: '#2e2e2e', color: '#ffffff' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box display="flex" alignItems="center" gap={2} p={2}>
          <img src="/gs-icon.png" alt="Logo" style={{ height: '50px' }} />
          <Typography variant="h6">Grupo El Surco</Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="body2">
            © Copyright 2019 GRUPO EL SURCO
          </Typography>
          <Typography variant="body2">
            Teléfono 02302 208498 - General Pico La Pampa
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
