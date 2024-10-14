import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Logo from '../header/logo';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta si es móvil

  return (
    <Box p={2} style={{ backgroundColor: theme.palette.grey[50] }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row', // Cambia la dirección en móvil
            alignItems: isMobile ? 'center' : 'flex-start', // Centrar en móviles
            justifyContent: 'space-between',
            gap: 2, // Espacio entre los elementos
          }}
        >
          <Logo />

          <Box sx={{ textAlign: isMobile ? 'center' : 'right' }}>
            <Typography variant="subtitle2">
              © Copyright 2019 GRUPO EL SURCO
            </Typography>
            <Typography variant="subtitle2">
              Teléfono 02302 208498 - General Pico La Pampa
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
