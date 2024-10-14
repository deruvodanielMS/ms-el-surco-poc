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
  const [activeChat, setActiveChat] = useState<Chat | null>(chats[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (activeChat && newMessage.trim()) {
      const updatedChat: Chat = {
        ...activeChat,
        messages: [
          ...activeChat.messages,
          { sender: 'Yo', text: newMessage, timestamp: 'Ahora' },
        ],
      };

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === updatedChat.id ? updatedChat : chat,
        ),
      );
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
            <Grid item xs={12}>
              <ChatView
                activeChat={activeChat}
                newMessage={newMessage}
                onMessageChange={setNewMessage}
                onSendMessage={handleSendMessage}
                onBack={() => setActiveChat(null)}
              />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <ChatList chats={chats} onChatSelect={setActiveChat} />
            </Grid>
          )
        ) : (
          <>
            <Grid item xs={4}>
              <ChatList chats={chats} onChatSelect={setActiveChat} />
            </Grid>
            <Grid item xs={8}>
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
