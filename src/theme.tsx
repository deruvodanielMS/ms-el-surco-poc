// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ECC7E',
      light: '#82DDB0',
      dark: '#0ECC7E',
      contrastText: '#111210',
    },
    secondary: {
      main: '#9274F4',
      light: '#CBC7F6',
      dark: '#58429E',
      contrastText: '#111210',
    },
    success: {
      main: '#008A37',
      light: '#64AF82',
      dark: '#004B1E',
      contrastText: '#000000',
    },
    info: {
      main: '#53C0D2',
      light: '#89BCD8',
      dark: '#063854',
      contrastText: '#000000',
    },
    warning: {
      main: '#FFA143',
      light: '#F5DBA2',
      dark: '#A0570D',
      contrastText: '#111210',
    },
    error: {
      main: '#CA453E',
      light: '#FA9590',
      dark: '#800F0A',
      contrastText: '#FAFAFA',
    },
    grey: {
      50: '#FAFAFA',
      100: '#E3E3E3',
      200: '#C0C0C0',
      300: '#A9A9A9',
      400: '#8A8A8A',
      500: '#6F6F6F',
      600: '#575757',
      700: '#434343',
      800: '#333333',
      900: '#212121',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
    background: {
      default: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Rethink Sans, Barlow, sans-serif',
    h1: {
      fontSize: '72px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '60px',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.75,
      fontFamily: 'Rethink Sans, sans-serif',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.75,
      fontFamily: 'Rethink Sans, sans-serif',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.75,
      fontFamily: 'Barlow, sans-serif',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.75,
      fontFamily: 'Barlow, sans-serif',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: 'Barlow, sans-serif',
    },
    button: {
      textTransform: 'none', // Elimina el uppercase globalmente
      fontFamily: 'Rethink Sans, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
