import { Box, Button, TextField, Typography } from '@mui/material';
import { Chat } from '../../types/data';
import ChatMessage from './chat-message';

interface ChatViewProps {
  activeChat: Chat;
  newMessage: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
  onBack?: () => void;
}

export default function ChatView({
  activeChat,
  newMessage,
  onMessageChange,
  onSendMessage,
  onBack,
}: ChatViewProps) {
  return (
    <>
      {onBack && (
        <Button onClick={onBack} sx={{ marginBottom: 2 }}>
          Volver
        </Button>
      )}

      <Typography variant="h6" gutterBottom>
        {activeChat.user}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {activeChat.orderDetails}
      </Typography>

      <Box
        sx={{
          height: 400,
          overflowY: 'auto',
          padding: 2,
          marginBottom: 2,
        }}
      >
        {activeChat.messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            sender={message.sender}
            timestamp={message.timestamp}
            isUser={message.sender === 'Yo'}
          />
        ))}
      </Box>

      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          placeholder="Escriba aquí su mensaje..."
          value={newMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" color="primary" onClick={onSendMessage}>
          Enviar
        </Button>
      </Box>
    </>
  );
}
