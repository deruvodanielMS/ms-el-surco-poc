import {
  Alert,
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useOrders } from '../../context/orders-context';
import DashboardLayout from '../layouts/dashboard-layout';
import CardView from './cards-view';
import TableView from './table-view';

export default function Orders() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { orders, error, loading } = useOrders();

  if (loading) {
    return (
      <DashboardLayout>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '80vh',
            width: '100%',
          }}
        >
          <CircularProgress />
          <Typography>Espere mientras se cargan los datos...</Typography>
        </Box>
      </DashboardLayout>
    );
  }

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={4}>
        Órdenes
      </Typography>
      <Box minWidth={'100%'}>
        {isMobile ? (
          <CardView orders={orders} />
        ) : (
          <TableView orders={orders} />
        )}
      </Box>
    </DashboardLayout>
  );
}
