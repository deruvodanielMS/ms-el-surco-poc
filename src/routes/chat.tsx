/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../components/chatbot/action-provider';
import config from '../components/chatbot/chatbot-config';
import MessageParser from '../components/chatbot/message-parser';

const ChatbotRoute = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatbotRoute;
