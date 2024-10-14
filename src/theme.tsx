// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ECC7E', // Primary main color
      light: '#82DDB0',
      dark: '#0ECC7E',
      contrastText: '#111210',
    },
    secondary: {
      main: '#53C0D2',
      light: '#C8F7FF',
      dark: '#1B636E',
      contrastText: '#111210',
    },
    success: {
      main: '#008A37',
      light: '#64AF82',
      dark: '#004B1E',
      contrastText: '#000000',
    },
    info: {
      main: '#1E82BA',
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
    fontFamily: 'Rethink Sans, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
});

export default theme;
