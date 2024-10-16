// src/pages/login/layout-screen.tsx
import { Box, Stack, Typography } from '@mui/material';
import LoginForm from './login-form';
import LoginSlider from './login-slider';

export default function LoginScreen() {
  return (
    <>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            display: 'flex',
            justifyContent: { xs: 'space-between', md: 'space-around' },
            height: '100%',
            flexDirection: 'column',
            pt: 5,
          }}
        >
          <LoginForm />

          <Typography variant="caption" p={5} textAlign={'center'}>
            © Copyright 2019 GRUPO EL SURCO Teléfono 02302 208498 - General Pico
            La Pampa
          </Typography>
        </Box>
        <LoginSlider />
      </Stack>
    </>
  );
}
