// src/pages/orders/CardView.tsx
import { Box, Card, CardContent, Typography } from '@mui/material';
import { orders } from '../../mock-data/mock-data';
import OrderStatus from '../dashboard/order-status';

export default function CardView() {
  return (
    <Box display="flex" flexDirection="column" gap={2} minWidth={'100%'}>
      {orders.map((order) => (
        <Card key={order.id} sx={{ width: '100%' }}>
          <CardContent sx={{ width: '100%' }}>
            <Typography variant="h6">Orden #{order.id}</Typography>
            <OrderStatus status={order.status} />
            <Typography variant="body2" mt={2}>
              {order.details}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Fecha: {order.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
