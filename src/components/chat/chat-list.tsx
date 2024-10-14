import { Chip, List, ListItem, ListItemText } from '@mui/material';
import theme from '../../theme';
import { Chat } from '../../types/data';

interface ChatListProps {
  chats: Chat[];
  onChatSelect: (chat: Chat) => void;
}

export default function ChatList({ chats, onChatSelect }: ChatListProps) {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem
          key={chat.id}
          component="li"
          onClick={() => onChatSelect(chat)}
        >
          <ListItemText primary={chat.user} secondary={chat.orderDetails} />
          {chat.unread && (
            <Chip
              label="Nuevos mensajes"
              sx={{ marginLeft: 2, backgroundColor: theme.palette.error.main }}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
