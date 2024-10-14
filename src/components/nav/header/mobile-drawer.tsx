import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
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

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box display="flex" alignItems="center" gap={2} p={2}>
          <img src="/gs-icon.png" alt="Logo" style={{ height: '50px' }} />
          <Typography variant="h6">Grupo El Surco</Typography>
        </Box>
        <NavItems navItems={navItems} />
        <Box p={2} display="flex" justifyContent="center">
          <Button variant="outlined" color="primary" onClick={onLogout}>
            Logout
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
