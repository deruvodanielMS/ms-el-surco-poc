import {
  Box,
  Chip,
  Container,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { Order, orderDataOverTime, orders } from '../../mock-data/mock-data';
import DashboardLayout from '../layouts/dashboard-layout';

function OrderStatus({ status }: { status: string }) {
  const getColor = () => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Shipped':
        return 'primary';
      case 'Delivered':
        return 'success';
      case 'Cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  return <Chip label={status} color={getColor()} />;
}

// Colores para cada porción del gráfico
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const calculateOrderStatusData = (orders: Order[]) => {
  const statusMap: { [key: string]: number } = orders.reduce(
    (acc: { [key: string]: number }, order: Order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    },
    {},
  );

  return Object.keys(statusMap).map((status) => ({
    name: status,
    value: statusMap[status],
  }));
};

// Datos calculados a partir de tus órdenes
const pieChartData = calculateOrderStatusData(orders);

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  // Simula una carga de datos de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <Typography variant="h4" gutterBottom my={5}>
          Dashboard
        </Typography>

        <Grid container spacing={4}>
          {/* Gráfico de Pastel */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Orders by Status
            </Typography>
            {loading ? (
              <Skeleton variant="rectangular" height={300} />
            ) : (
              <>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieChartData.map((_entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={orderDataOverTime}>
                    <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />

                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </>
            )}
          </Grid>

          {/* Tabla de Órdenes */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            {loading ? (
              <Box>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </Box>
            ) : (
              <Box>
                {orders.map((order) => (
                  <Box
                    key={order.id}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 1.5,
                      mb: 1,
                      backgroundColor: '#d9d9d9',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="caption">{order.details}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      <OrderStatus status={order.status} />
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
