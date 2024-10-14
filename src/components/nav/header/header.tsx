import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DesktopNav from './desktop-nav';
import Logo from './logo';
import MobileDrawer from './mobile-drawer';

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Órdenes', path: '/orders' },
  { name: 'Archivos', path: '/files' },
  { name: 'Chat', path: '/chat' },
];

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      style={{ backgroundColor: theme.palette.grey[50] }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        {isMobile ? (
          <MobileDrawer navItems={navItems} onLogout={handleLogout} />
        ) : (
          <DesktopNav navItems={navItems} onLogout={handleLogout} />
        )}
      </Container>
    </Box>
  );
}
