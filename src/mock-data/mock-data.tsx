// Datos de órdenes simulados
export interface Order {
  id: number;
  status: string;
  details: string;
  date: string;
}

const orders = [
  {
    id: 1,
    status: 'Pending',
    details: 'Order for agricultural machinery',
    date: '2023-10-01',
  },
  {
    id: 2,
    status: 'Shipped',
    details: 'Order for fuel distribution equipment',
    date: '2023-10-03',
  },
  {
    id: 3,
    status: 'Delivered',
    details: 'Order for irrigation systems',
    date: '2023-10-05',
  },
  {
    id: 4,
    status: 'Cancelled',
    details: 'Order for farm tools and accessories',
    date: '2023-10-06',
  },
  {
    id: 5,
    status: 'Pending',
    details: 'Order for petroleum lubricants',
    date: '2023-10-07',
  },
  {
    id: 6,
    status: 'Delivered',
    details: 'Order for crop protection supplies',
    date: '2023-10-08',
  },
  {
    id: 7,
    status: 'Shipped',
    details: 'Order for construction tractors',
    date: '2023-10-09',
  },
  {
    id: 8,
    status: 'Pending',
    details: 'Order for field irrigation pumps',
    date: '2023-10-10',
  },
];

// Datos para el gráfico de pedidos a lo largo del tiempo
const orderDataOverTime = [
  { name: 'Week 1', orders: 20 },
  { name: 'Week 2', orders: 25 },
  { name: 'Week 3', orders: 15 },
  { name: 'Week 4', orders: 30 },
  { name: 'Week 5', orders: 50 },
];

// Exportamos ambos objetos
export { orderDataOverTime, orders };
