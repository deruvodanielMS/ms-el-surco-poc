import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { Chat } from '../../types/data';
import ChatMessage from './chat-message';

interface ChatViewProps {
  chat: Chat; // Recibe el chat como prop
  newMessage: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

export default function ChatView({
  chat,
  newMessage,
  onMessageChange,
  onSendMessage,
}: ChatViewProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Efecto para desplazar hacia el último mensaje automáticamente cuando se envía uno nuevo
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [chat.messages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {chat.user}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {chat.orderDetails}
      </Typography>

      <Box
        ref={messagesContainerRef}
        sx={{
          width: '100%',
          height: 400,
          overflowY: 'auto',
          padding: 2,
          marginBottom: 2,
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
        }}
      >
        {chat.messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            sender={message.sender}
            timestamp={message.timestamp}
            isSystem={message.sender === 'Sistema'}
          />
        ))}
        <div ref={messagesEndRef} />
      </Box>

      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          placeholder="Escriba aquí su mensaje..."
          value={newMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{ marginRight: 2 }}
        />
        <IconButton
          onClick={onSendMessage}
          sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            width: 56,
            height: 56,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
          }}
          aria-label="Enviar mensaje"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}
