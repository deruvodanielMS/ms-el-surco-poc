import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useUser } from '../../../context/user-context';
import theme from '../../../theme';
import NavItems from '../nav-items';

interface MobileDrawerProps {
  navItems: { name: string; path: string }[];
  onLogout: () => void;
}

export default function MobileDrawer({
  navItems,
  onLogout,
}: MobileDrawerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { username } = useUser();
  const avatarUrl = `https://thispersondoesnotexist.com/`;

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleClose = () => setDrawerOpen(false); // Cierra el drawer

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.background.default,
            padding: '24px',
          },
        }}
      >
        {/* Encabezado con botón de cerrar */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderBottom: '1px solid',
              borderColor: theme.palette.grey[100],
            }}
            pb={2}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <img src="/gs-icon.png" alt="Logo" style={{ height: '50px' }} />
              <Typography variant="h6">Grupo El Surco</Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {/* Navegación */}
          <NavItems navItems={navItems} onItemClick={handleClose} />
          {/* Cierra el drawer al clickear */}
        </Box>

        {/* Pie del drawer */}
        <Box
          sx={{ borderTop: '1px solid', borderColor: theme.palette.grey[100] }}
        >
          <Stack
            sx={{ flexDirection: 'row', alignItems: 'center' }}
            my={3}
            px={2}
          >
            <Avatar
              src={avatarUrl}
              alt={username}
              sx={{ width: 50, height: 50 }}
            />
            <Box ml={1} textAlign="left">
              <Typography variant="subtitle2">{username}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Administrador
              </Typography>
            </Box>
          </Stack>

          <MenuItem onClick={handleClose}>
            <SettingsOutlinedIcon sx={{ width: '20px', height: '20px' }} />
            <Typography variant="subtitle2" ml={2}>
              Ajustes
            </Typography>
          </MenuItem>

          <MenuItem onClick={onLogout}>
            <LogoutIcon
              sx={{
                color: theme.palette.error.main,
                width: '20px',
                height: '20px',
              }}
            />
            <Typography
              variant="subtitle2"
              ml={2}
              color={theme.palette.error.main}
            >
              Cerrar sesión
            </Typography>
          </MenuItem>
        </Box>
      </Drawer>
    </>
  );
}
