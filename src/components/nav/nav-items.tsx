import { List, ListItem, ListItemText } from '@mui/material';
import CustomLink from '../ui/custom-link';

interface NavItemsProps {
  navItems: { name: string; path: string }[];
  onItemClick?: (item: { name: string; path: string }) => void;
}

export default function NavItems({ navItems, onItemClick }: NavItemsProps) {
  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.name} onClick={() => onItemClick?.(item)}>
          <CustomLink to={item.path} underline>
            <ListItemText primary={item.name} />
          </CustomLink>
        </ListItem>
      ))}
    </List>
  );
}
