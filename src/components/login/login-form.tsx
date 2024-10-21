import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  Box,
  Button,
  Fade,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/user-context';
import { mockUsers } from '../../mock-data/mock-users';

export default function LoginForm() {
  const { setUsername } = useUser();
  const [username, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false); // Controla la aparición del formulario
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = mockUsers.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      setError('');
      setUsername(username);
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  // Soporte para el teclado (presionar "Enter")
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  // Muestra el formulario con un pequeño retardo
  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 300);
    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  return (
    <Fade in={showForm} timeout={500}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            height: 'fit-content',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: 2, md: 4 },
            boxShadow: { xs: 'none', md: '0px 0px 10px rgba(0, 0, 0, 0.1)' },
            borderRadius: { xs: 'none', md: '8px' },
            maxHeight: 'fit-content',
            width: { xs: '80%', md: '90%', lg: '60%' },
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            gap={2}
            mb={2}
            alignItems="center"
          >
            <img
              src="/gs-icon.png"
              alt="logo"
              style={{ width: '88px', height: '88px' }}
            />
            <Typography variant="h4" gutterBottom mt={2}>
              Grupo El Surco
            </Typography>
          </Stack>
          <TextField
            label="Usuario"
            value={username}
            onChange={(e) => setLocalUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              transition: 'all 0.3s ease-in-out', // Transición para focus
              '&:focus-within': {
                transform: 'scale(1.05)',
              },
            }}
            autoFocus // El foco comienza en este campo
          />

          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              transition: 'all 0.3s ease-in-out', // Transición para focus
              '&:focus-within': {
                transform: 'scale(1.05)',
              },
            }}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              marginTop: '16px',
              width: { xs: '100%', md: 'auto' },
            }}
            endIcon={<ArrowForwardIcon />}
            aria-label="Iniciar sesión"
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}
