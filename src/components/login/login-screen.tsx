// src/pages/login/layout-screen.tsx
import { Stack } from '@mui/material';
import LoginForm from './login-form';
import LoginSlider from './login-slider';

export default function LoginScreen() {
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <LoginForm />
      <LoginSlider />
    </Stack>
  );
}
