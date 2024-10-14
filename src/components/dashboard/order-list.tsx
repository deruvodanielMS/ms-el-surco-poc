import { Box, Typography } from '@mui/material';
import { orders } from '../../mock-data/mock-data';
import theme from '../../theme';
import CustomLink from '../ui/custom-link';
import OrderStatus from './order-status';

export default function OrderList() {
  return (
    <Box>
      {orders.map((order) => (
        <CustomLink to={'/orders'}>
          <Box
            key={order.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1.5,
              mb: 1,
              backgroundColor: theme.palette.grey[50],
              borderRadius: 2,
            }}
          >
            <Typography variant="caption">{order.details}</Typography>
            <OrderStatus status={order.status} />
          </Box>
        </CustomLink>
      ))}
    </Box>
  );
}
