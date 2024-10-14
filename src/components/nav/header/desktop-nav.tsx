import { Box } from '@mui/material';
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
        <CustomLink key={item.name} to={item.path} underline>
          {item.name}
        </CustomLink>
      ))}

      <UserDropdown onLogout={onLogout} />
    </Box>
  );
}
