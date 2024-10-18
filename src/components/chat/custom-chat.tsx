import { Grid, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

import { initialChat } from '../../mock-data/mock-chats';
import { Chat } from '../../types/data';
import DashboardLayout from '../layouts/dashboard-layout';
import ChatView from './chat-view';

export default function CustomChat() {
  const theme = useTheme();
  const [chat, setChat] = useState<Chat>(initialChat); // Estado para manejar el chat
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedChat: Chat = {
        ...chat,
        messages: [
          ...chat.messages,
          {
            sender: 'Marc Perez', // El usuario es siempre Marc Perez
            text: newMessage,
            timestamp: new Date().toLocaleTimeString(),
          },
          {
            sender: 'Sistema',
            text: 'Gracias por su mensaje, estamos procesando su consulta.',
            timestamp: new Date().toLocaleTimeString(),
          },
        ],
      };

      // Actualizar el chat con los nuevos mensajes
      setChat(updatedChat);
      setNewMessage(''); // Limpiar el campo de entrada
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={5} textAlign="left">
        Chat
      </Typography>

      <Grid container justifyContent="center">
        <Grid
          item
          sx={{
            border: '1px solid',
            borderColor: theme.palette.grey[100],
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          {/* Siempre mostramos el mismo chat */}
          <ChatView
            chat={chat} // Pasamos el chat como prop
            newMessage={newMessage}
            onMessageChange={setNewMessage}
            onSendMessage={handleSendMessage}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
