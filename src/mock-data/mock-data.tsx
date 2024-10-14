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

// Datos para el gráfico de pedidos a lo largo del tiempo
const orderDataOverTime = [
  { name: 'Semana 1', orders: 20 },
  { name: 'Semana 2', orders: 25 },
  { name: 'Semana 3', orders: 15 },
  { name: 'Semana 4', orders: 30 },
  { name: 'Semana 5', orders: 50 },
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
        text: 'Gracias por su compra. Su orden de maquinaria agrícola está siendo preparada.',
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
    messages: [],
  },
  {
    id: 3,
    user: 'Cristian Vargas',
    orderDetails: 'Orden para lubricantes de petróleo',
    unread: false,
    messages: [
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
    messages: [],
  },
  {
    id: 5,
    user: 'Rodrigo Zambrana',
    orderDetails: 'Orden para bombas de irrigación',
    unread: false,
    messages: [
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

export { chats, orderDataOverTime, orders };
