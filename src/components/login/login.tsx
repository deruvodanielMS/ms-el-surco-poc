// src/pages/login/Login.tsx
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../../context/user-context';
import { mockUsers } from '../../mock-data/mock-users';

export default function Login() {
  const { setUsername } = useUser(); // Accede al contexto
  const [username, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = mockUsers.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      setError('');
      setUsername(username); // Guarda el nombre de usuario en el contexto
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'space-around' },
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 4, md: 0 },
        }}
      >
        <img
          src="/gs-icon.png"
          alt="logo"
          style={{ width: '150px', height: '150px' }}
        />
        <Typography variant="h5" gutterBottom mt={2}>
          Grupo El Surco
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: '100%', sm: '400px', md: '500px' },
          padding: { xs: 2, md: 4 },
          boxShadow: { xs: 'none', md: '0px 0px 10px rgba(0, 0, 0, 0.1)' },
          borderRadius: { xs: 'none', md: '8px' },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setLocalUsername(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ marginTop: '16px', width: '100%' }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}
