class ActionProvider {
  constructor(createMessage, setState) {
    this.createMessage = createMessage;
    this.setState = setState;
  }

  handleHello = () => {
    const message = this.createMessage('¡Hola! ¿Cómo puedo ayudarte?');
    this.setState((prevMessages) => [...prevMessages, message]);
  };
}

export default ActionProvider;
