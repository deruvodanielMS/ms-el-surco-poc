// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#CCCCCC', // Color primario personalizado
    },
    background: {
      default: '#f5f5f5', // Color de fondo por defecto
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif', // Fuente personalizada
  },
});

export default theme;
