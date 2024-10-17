// Datos de órdenes simulados
import { Order } from '../types/data';

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

export { orderDataOverTime, sortedOrders as orders };
