import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { chats as initialChats } from '../../mock-data/mock-data';
import { Chat } from '../../types/data';
import DashboardLayout from '../layouts/dashboard-layout';
import ChatList from './chat-list';
import ChatView from './chat-view';

export default function CustomChat() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [activeChat, setActiveChat] = useState<Chat | null>(null); // Inicialmente, no hay chat activo
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (activeChat && newMessage.trim()) {
      const updatedChat: Chat = {
        ...activeChat,
        messages: [
          ...activeChat.messages,
          {
            sender: 'Sistema',
            text: newMessage,
            timestamp: new Date().toLocaleTimeString(),
          },
        ],
      };

      // Actualizar la lista de chats con los mensajes nuevos
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === updatedChat.id ? updatedChat : chat,
        ),
      );

      // Actualizar el chat activo para reflejar los cambios de inmediato
      setActiveChat(updatedChat);
      setNewMessage('');
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={5} textAlign="left">
        Chat
      </Typography>

      <Grid container spacing={2}>
        {isMobile ? (
          activeChat ? (
            <Grid
              item
              xs={12}
              sx={{
                border: '1px solid',
                borderColor: theme.palette.grey[100],
                borderRadius: '24px',
                padding: '24px',
                ml: 2,
              }}
            >
              <ChatView
                activeChat={activeChat}
                newMessage={newMessage}
                onMessageChange={setNewMessage}
                onSendMessage={handleSendMessage}
                onBack={() => setActiveChat(null)} // Volver a la lista de chats
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              sx={{
                border: '1px solid',
                borderColor: theme.palette.grey[100],
                borderRadius: '24px',
                paddingY: '24px',
                paddingLeft: '0 !important',
                ml: 2,
              }}
            >
              <ChatList chats={chats} onChatSelect={setActiveChat} />
            </Grid>
          )
        ) : (
          <>
            <Grid
              item
              xs={4}
              sx={{
                border: '1px solid',
                borderColor: theme.palette.grey[100],
                borderRadius: '24px 0 0 24px ',
                paddingY: '24px',
                paddingLeft: '0 !important',
                minHeight: '100%',
              }}
            >
              <ChatList chats={chats} onChatSelect={setActiveChat} />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                border: '1px solid',
                borderColor: theme.palette.grey[100],
                borderRadius: '0 24px 24px 0',
                padding: '24px',
                height: '100%',
              }}
            >
              {activeChat ? (
                <ChatView
                  activeChat={activeChat}
                  newMessage={newMessage}
                  onMessageChange={setNewMessage}
                  onSendMessage={handleSendMessage}
                />
              ) : (
                <Typography variant="h6">
                  Selecciona un chat para ver los mensajes.
                </Typography>
              )}
            </Grid>
          </>
        )}
      </Grid>
    </DashboardLayout>
  );
}
