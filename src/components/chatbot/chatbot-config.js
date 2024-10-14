import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'El Surco Chat',
  initialMessages: [createChatBotMessage('¡Hola! ¿En qué puedo ayudarte?')],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
