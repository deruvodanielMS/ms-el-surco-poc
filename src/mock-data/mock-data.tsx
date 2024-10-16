// Datos de órdenes simulados
import { Chat, Order } from '../types/data';

const orders: Order[] = [
  {
    id: 1,
    status: 'Pendiente',
    details: 'Pedido de maquinaria agrícola',
    date: '2023-10-01',
  },
  {
    id: 2,
    status: 'Enviado',
    details: 'Pedido de equipos para distribución de combustible',
    date: '2023-10-03',
  },
  {
    id: 3,
    status: 'Entregado',
    details: 'Pedido de sistemas de riego',
    date: '2023-10-05',
  },
  {
    id: 4,
    status: 'Cancelado',
    details: 'Pedido de herramientas y accesorios de campo',
    date: '2023-10-06',
  },
  {
    id: 5,
    status: 'Pendiente',
    details: 'Pedido de lubricantes para petróleo',
    date: '2023-10-07',
  },
  {
    id: 6,
    status: 'Entregado',
    details: 'Pedido de insumos para protección de cultivos',
    date: '2023-10-08',
  },
  {
    id: 7,
    status: 'Enviado',
    details: 'Pedido de tractores para construcción',
    date: '2023-10-09',
  },
  {
    id: 8,
    status: 'Pendiente',
    details: 'Pedido de bombas de riego para el campo',
    date: '2023-10-10',
  },
];

// Ordenar las órdenes por fecha de más reciente a más antigua
const sortedOrders = orders.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

// Datos para la comparativa entre dos años
const orderDataOverTime = [
  { name: 'Semana 1', '2023': 20, '2024': 30 },
  { name: 'Semana 2', '2023': 25, '2024': 35 },
  { name: 'Semana 3', '2023': 15, '2024': 25 },
  { name: 'Semana 4', '2023': 30, '2024': 40 },
  { name: 'Semana 5', '2023': 50, '2024': 45 },
];

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

export { chats, orderDataOverTime, sortedOrders as orders };
