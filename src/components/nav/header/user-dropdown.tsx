import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useUser } from '../../../context/user-context';
import theme from '../../../theme';
import { getAvatarUrl } from '../../../utils/get-avatar';
import SettingsModal from '../settings-modal';

interface UserDropdownProps {
  onLogout: () => void;
}

export default function UserDropdown({ onLogout }: UserDropdownProps) {
  const { username } = useUser(); // Accede al nombre y rol del usuario desde el contexto
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleMenuClose(); // Cerrar el menú al abrir el modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Obtiene el avatar específico del usuario
  const avatarUrl = getAvatarUrl(username);

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

      <Popper
        open={isMenuOpen}
        anchorEl={anchorEl}
        placement="bottom-end"
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10], // Ajusta el desplazamiento vertical
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleMenuClose}>
          <Paper
            elevation={1}
            sx={{
              borderRadius: 4,
              paddingX: 0,
              paddingY: 2,
              minWidth: 200,
              mt: 1,
            }}
          >
            <Stack>
              <MenuItem
                onClick={handleOpenModal} // Abre el modal al hacer clic
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                }}
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
                  px: 2,
                  py: 1,
                  color: theme.palette.error.main,
                }}
              >
                <LogoutIcon
                  sx={{
                    color: theme.palette.error.main,
                    width: 20,
                    height: 20,
                  }}
                />
                <Typography
                  variant="subtitle2"
                  color={theme.palette.error.main}
                >
                  Cerrar sesión
                </Typography>
              </MenuItem>
            </Stack>
          </Paper>
        </ClickAwayListener>
      </Popper>

      {/* Modal personalizado */}
      <SettingsModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
