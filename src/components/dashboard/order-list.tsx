import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Stack, Typography } from '@mui/material';
import theme from '../../theme';
import { Order } from '../../types/data'; // Asegúrate de que esté importado
import CustomLink from '../ui/custom-link';
import OrderStatus from './order-status';

export default function OrderList({ orders }: { orders: Order[] }) {
  return (
    <CustomLink to={'/orders'}>
      <Box
        sx={{
          border: '1px solid',
          borderColor: theme.palette.grey[100],
          borderRadius: '24px',
          padding: '24px',
        }}
      >
        <Stack
          direction={'row'}
          width={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h6" gutterBottom>
            Órdenes recientes
          </Typography>
          <Button
            variant="text"
            color="secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  transition: 'transform 0.3s ease',
                }}
              />
            }
          >
            Ver Todas
          </Button>
        </Stack>

        {/* Mostrar solo las primeras 8 órdenes */}
        {orders.slice(0, 6).map((order) => (
          <Box
            key={order.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1.5,
              mb: 1,
              backgroundColor: theme.palette.grey[50],
              borderRadius: 2,
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="body1">{order.details}</Typography>
              <Typography
                variant="caption"
                mt={2}
                fontWeight={700}
                textTransform={'uppercase'}
                color={theme.palette.grey[300]}
              >
                &#x2022; {order.businessUnit}
              </Typography>
            </Box>
            <OrderStatus status={order.status} />
          </Box>
        ))}
      </Box>
    </CustomLink>
  );
}
