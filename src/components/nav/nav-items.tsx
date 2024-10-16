import { List, ListItem, Typography } from '@mui/material';
import CustomLink from '../ui/custom-link';

interface NavItemsProps {
  navItems: { name: string; path: string }[];
  onItemClick?: (item: { name: string; path: string }) => void;
}

export default function NavItems({ navItems, onItemClick }: NavItemsProps) {
  return (
    <List sx={{ marginTop: 4 }}>
      {navItems.map((item) => (
        <ListItem
          key={item.name}
          onClick={() => onItemClick?.(item)}
          sx={{ paddingLeft: 0, marginBottom: '32px' }}
        >
          <CustomLink to={item.path} underline>
            <Typography variant="subtitle1">{item.name}</Typography>
          </CustomLink>
        </ListItem>
      ))}
    </List>
  );
}
