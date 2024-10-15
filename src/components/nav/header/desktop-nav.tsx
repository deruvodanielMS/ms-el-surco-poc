import { Box, Typography } from '@mui/material';
import CustomLink from '../../ui/custom-link';
import UserDropdown from './user-dropdown';

interface DesktopNavProps {
  navItems: { name: string; path: string }[];
  onLogout: () => void;
}

export default function DesktopNav({ navItems, onLogout }: DesktopNavProps) {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {navItems.map((item) => (
        <CustomLink to={item.path} underline boldOnHover>
          <Typography variant="subtitle1">{item.name}</Typography>
        </CustomLink>
      ))}

      <UserDropdown onLogout={onLogout} />
    </Box>
  );
}
