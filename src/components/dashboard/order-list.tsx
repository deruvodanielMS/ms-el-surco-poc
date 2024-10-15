import { Box, Typography } from '@mui/material';
import { orders } from '../../mock-data/mock-data';
import theme from '../../theme';
import CustomLink from '../ui/custom-link';
import OrderStatus from './order-status';

export default function OrderList() {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        borderRadius: '24px',
        padding: '24px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Órdenes recientes
      </Typography>
      <CustomLink to={'/orders'}>
        {orders.map((order) => (
          <Box
            key={order.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              py: 1.5,
              mb: 1,
              backgroundColor: theme.palette.grey[50],
              borderRadius: 2,
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body1">{order.details}</Typography>
            <OrderStatus status={order.status} />
          </Box>
        ))}
      </CustomLink>
    </Box>
  );
}
