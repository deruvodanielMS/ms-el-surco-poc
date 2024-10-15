import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import theme from '../../theme';
import { Chat } from '../../types/data';

interface ChatListProps {
  chats: Chat[];
  onChatSelect: (chat: Chat) => void;
}

export default function ChatList({ chats, onChatSelect }: ChatListProps) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom ml={2}>
        Mensajes recientes
      </Typography>

      <List>
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            component="li"
            onClick={() => onChatSelect(chat)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                bgcolor: theme.palette.grey[100],
              },
            }}
          >
            <ListItemText primary={chat.user} secondary={chat.orderDetails} />
            {chat.unread && (
              <Chip
                label="Nuevos mensajes"
                sx={{
                  marginLeft: 2,
                  backgroundColor: theme.palette.error.main,
                  height: '20px',
                  color: 'white',
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
