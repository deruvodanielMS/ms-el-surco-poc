// src/components/user/UserDropdown.tsx
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useUser } from '../../../context/user-context';

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

  return (
    <>
      <Button onClick={handleMenuOpen}>
        <Avatar src={avatarUrl} alt={username} sx={{ width: 30, height: 30 }} />
        <Box ml={1} textAlign="left">
          <Typography variant="subtitle1">{username}</Typography>
          <Typography variant="body2" color="textSecondary">
            Administrador
          </Typography>
        </Box>
        <ExpandMoreIcon />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: 1 }}
      >
        <Avatar src={avatarUrl} alt={username} sx={{ width: 30, height: 30 }} />
        <MenuItem>
          <Typography variant="subtitle1">{username}</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body2" color="textSecondary">
            Administrador
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
