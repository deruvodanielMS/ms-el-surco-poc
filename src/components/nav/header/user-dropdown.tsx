// src/components/user/UserDropdown.tsx
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar, Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useUser } from '../../../context/user-context';
import theme from '../../../theme';

interface UserDropdownProps {
  onLogout: () => void;
}

export default function UserDropdown({ onLogout }: UserDropdownProps) {
  const { username } = useUser(); // Accede al nombre y rol del usuario desde el contexto
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Genera un URL aleatorio para la imagen del avatar basado en el nombre del usuario
  const avatarUrl = `https://thispersondoesnotexist.com/`;

  const isMenuOpen = Boolean(anchorEl); // Verifica si el menú está abierto

  return (
    <>
      <Button
        onClick={handleMenuOpen}
        sx={{ display: 'flex', alignItems: 'center', textTransform: 'none' }}
      >
        <Avatar src={avatarUrl} alt={username} sx={{ width: 50, height: 50 }} />
        <Box mx={2} textAlign="left">
          <Typography variant="subtitle1" color={theme.palette.grey[800]}>
            {username}
          </Typography>
          <Typography variant="subtitle2" color={theme.palette.grey[400]}>
            Administrador
          </Typography>
        </Box>
        <ExpandMoreIcon
          sx={{
            color: 'black',
            transition: 'transform 0.3s ease',
            transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Gira la flecha
          }}
        />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 1, // Sombra del menú
          sx: {
            borderRadius: 4, // Bordes redondeados
            paddingX: 0,
            paddingY: 2,
            minWidth: 200,
            mt: 1,
          },
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <SettingsOutlinedIcon sx={{ width: 20, height: 20 }} />
          <Typography variant="subtitle2">Ajustes</Typography>
        </MenuItem>
        <MenuItem
          onClick={onLogout}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: theme.palette.error.main,
          }}
        >
          <LogoutIcon
            sx={{ color: theme.palette.error.main, width: 20, height: 20 }}
          />
          <Typography variant="subtitle2" color={theme.palette.error.main}>
            Cerrar sesión
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
