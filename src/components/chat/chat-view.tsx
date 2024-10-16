import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Efecto para desplazar hacia el último mensaje automáticamente cuando se envía uno nuevo
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [activeChat.messages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <>
      {onBack && (
        <Button
          variant="text"
          onClick={onBack}
          color="secondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
          startIcon={<ArrowBackIcon />}
        >
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
        ref={messagesContainerRef}
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
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Enviar mensaje"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}
