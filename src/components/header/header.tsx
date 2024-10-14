import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detectar si es vista móvil
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función de logout
  const handleLogout = () => {
    navigate('/login');
  };

  // Función para abrir/cerrar el drawer (menú hamburguesa)
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Ítems de navegación
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Órdenes', path: '/orders' },
    { name: 'Archivos', path: '/files' },
    { name: 'Chat', path: '/chatbot' },
  ];

  const renderNavItems = () => (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.name} onClick={() => console.log(item)}>
          <Button sx={{ color: 'black' }} component={Link} to={item.path}>
            <ListItemText primary={item.name} />
          </Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      style={{ backgroundColor: '#2e2e2e', color: '#ffffff' }}
    >
      {/* Logo y Nombre */}
      <Box display="flex" alignItems="center" gap={2}>
        <img src="/gs-icon.png" alt="Logo" style={{ height: '50px' }} />
        <Typography variant="h6">Grupo El Surco</Typography>
      </Box>

      {/* Menú de navegación */}
      {isMobile ? (
        <>
          {/* Ícono de menú hamburguesa para vista móvil */}
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ p: 5 }}
          >
            {/* Logo y Nombre */}
            <Box display="flex" alignItems="center" gap={2} p={2}>
              <img src="/gs-icon.png" alt="Logo" style={{ height: '50px' }} />
              <Typography variant="h6">Grupo El Surco</Typography>
            </Box>
            {renderNavItems()}
            {/* Botón de logout en el Drawer */}
            <Box p={2} display="flex" justifyContent="center">
              <Button variant="outlined" color="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box display="flex" alignItems="center" gap={2}>
          {/* Ítems de navegación para vista de escritorio */}
          {navItems.map((item) => (
            <Button
              key={item.name}
              sx={{ color: '#fff' }}
              component={Link}
              to={item.path}
            >
              {item.name}
            </Button>
          ))}
          {/* Botón de logout en vista de escritorio */}
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      )}
    </Box>
  );
}
