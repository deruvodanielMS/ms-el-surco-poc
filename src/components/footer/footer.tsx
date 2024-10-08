import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      style={{ backgroundColor: '#2e2e2e', color: '#ffffff' }}
    >
      <Typography variant="body2">© Copyright 2019 GRUPO EL SURCO</Typography>
      <Typography variant="body2">
        Teléfono 02302 208498 - General Pico La Pampa
      </Typography>
    </Box>
  );
}
