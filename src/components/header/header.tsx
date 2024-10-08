import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  // Función de logout
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      gap={2}
      style={{ backgroundColor: '#2e2e2e', color: '#ffffff' }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <img
          src="/src/assets/gs-icon.png"
          alt="Logo"
          style={{ height: '50px' }}
        />
        <Typography variant="h6">Grupo El Surco</Typography>
      </Box>
      <Button variant="outlined" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
}
