import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, IconButton, TextField, Typography } from '@mui/material';
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

  // Desplazar hacia el último mensaje automáticamente
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat.messages]);

  return (
    <>
      {onBack && (
        <Typography
          onClick={onBack}
          sx={{ marginBottom: 2, cursor: 'pointer', color: 'secondary.main' }}
        >
          Volver
        </Typography>
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
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}
