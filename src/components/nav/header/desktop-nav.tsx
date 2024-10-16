import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Importar useLocation para obtener la URL actual
import CustomLink from '../../ui/custom-link';
import UserDropdown from './user-dropdown';

interface DesktopNavProps {
  navItems: { name: string; path: string }[];
  onLogout: () => void;
}

export default function DesktopNav({ navItems, onLogout }: DesktopNavProps) {
  const location = useLocation(); // Obtener la URL actual

  return (
    <Box display="flex" alignItems="center" gap={5}>
      {navItems.map((item) => (
        <CustomLink to={item.path} underline key={item.path}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: location.pathname === item.path ? 'bold' : 'normal', // Si coincide la URL, poner en bold
            }}
          >
            {item.name}
          </Typography>
        </CustomLink>
      ))}

      <UserDropdown onLogout={onLogout} />
    </Box>
  );
}
