class MessageParser {
  constructor(createMessage, setState) {
    this.createMessage = createMessage;
    this.setState = setState;
  }

  parse = (message) => {
    if (message.toLowerCase().includes('hola')) {
      this.setState((prevMessages) => [
        ...prevMessages,
        this.createMessage('¡Hola! ¿En qué puedo ayudarte?'),
      ]);
    }
  };
}

export default MessageParser;
