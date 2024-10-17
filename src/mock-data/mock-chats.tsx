import { Chat } from '../types/data';

const chats: Chat[] = [
  {
    id: 1,
    user: 'Marc Perez',
    orderDetails: 'Orden para maquinaria agrícola',
    unread: false,
    messages: [
      {
        sender: 'Sistema',
        text: `Mensaje Automático del Sistema\nConfirmación de Orden N.º 12345\nEstimado [Marc Perez],\nGracias por su compra. Su orden de maquinaria agrícola ha sido procesada y actualmente está siendo preparada para el envío.\nLe notificaremos cuando su pedido esté en camino.\nSaludos,\nEl Surco`,
        timestamp: '10:30 AM',
      },
      {
        sender: 'Marc Perez',
        text: '¿Cuándo llegará la maquinaria?',
        timestamp: '10:32 AM',
      },
    ],
  },
  {
    id: 2,
    user: 'Vivian Villar',
    orderDetails: 'Orden para distribución de combustible',
    unread: true,
    messages: [
      {
        sender: 'Sistema',
        text: `Mensaje Automático del Sistema\nConfirmación de Orden N.º 67890\nEstimada [Vivian Villar],\nGracias por su compra. Su orden de distribución de combustible está en proceso y pronto será despachada.\nNos pondremos en contacto para confirmar la entrega.\nSaludos,\nEl Surco`,
        timestamp: '9:00 AM',
      },
      {
        sender: 'Vivian Villar',
        text: `Tengo problemas para recibir el pedido. Pueden ayudarme?`,
        timestamp: '10:30 AM',
      },
    ],
  },
  {
    id: 3,
    user: 'Cristian Vargas',
    orderDetails: 'Orden para lubricantes de petróleo',
    unread: false,
    messages: [
      {
        sender: 'Sistema',
        text: `Mensaje Automático del Sistema\nConfirmación de Orden N.º 12345\nEstimado [Cristian Vargas],\nGracias por su compra. Su orden de maquinaria agrícola ha sido procesada y actualmente está siendo preparada para el envío.\nLe notificaremos cuando su pedido esté en camino.\nSaludos,\nEl Surco`,
        timestamp: '10:30 AM',
      },
      {
        sender: 'Sistema',
        text: 'Su pedido de lubricantes está en camino y llegará el 20 de octubre.',
        timestamp: '11:15 AM',
      },
      {
        sender: 'Cristian Vargas',
        text: 'Perfecto, gracias por la confirmación.',
        timestamp: '11:18 AM',
      },
    ],
  },
  {
    id: 4,
    user: 'Adriana Vargas Villar',
    orderDetails: 'Orden para tractores de construcción',
    unread: true,
    messages: [
      {
        sender: 'Sistema',
        text: `Mensaje Automático del Sistema\nConfirmación de Orden N.º 54321\nEstimada [Adriana Vargas Villar],\nSu orden de tractores de construcción ha sido confirmada y se encuentra en preparación.\nLe notificaremos cuando esté lista para ser enviada.\nSaludos,\nEl Surco`,
        timestamp: '8:45 AM',
      },
      {
        sender: 'Adriana Vargas Villar',
        text: `Necesito saber si el flete tiene valor adicional.`,
        timestamp: '8:45 AM',
      },
    ],
  },
  {
    id: 5,
    user: 'Rodrigo Zambrana',
    orderDetails: 'Orden para bombas de irrigación',
    unread: false,
    messages: [
      {
        sender: 'Sistema',
        text: `Mensaje Automático del Sistema\nConfirmación de Orden N.º 12345\nEstimado [Rodrigo Zambrana],\nGracias por su compra. Su orden de maquinaria agrícola ha sido procesada y actualmente está siendo preparada para el envío.\nLe notificaremos cuando su pedido esté en camino.\nSaludos,\nEl Surco`,
        timestamp: '10:30 AM',
      },
      {
        sender: 'Sistema',
        text: 'Su pedido de bombas de irrigación fue entregado el 10 de octubre.',
        timestamp: '9:00 AM',
      },
      {
        sender: 'Rodrigo Zambrana',
        text: 'Gracias por la entrega puntual.',
        timestamp: '9:05 AM',
      },
    ],
  },
];

export { chats };
