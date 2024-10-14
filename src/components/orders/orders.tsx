import {
  Box,
  Card,
  CardContent,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { orders } from '../../mock-data/mock-data';
import { getColorByStatus } from '../../utils/color-utils';
import DashboardLayout from '../layouts/dashboard-layout';

// Componente de estado con Chip
function OrderStatus({ status }: { status: string }) {
  const color = getColorByStatus(status);

  return <Chip label={status} sx={{ backgroundColor: color, color: '#000' }} />;
}

// Componente principal de Orders
export default function Orders() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Vista de tabla para desktop
  const TableView = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                <OrderStatus status={order.status} />
              </TableCell>
              <TableCell>{order.details}</TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  // Vista de tarjetas para mobile
  const CardView = () => (
    <Box display="flex" flexDirection="column" gap={2}>
      {orders.map((order) => (
        <Card key={order.id} sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h6">Order #{order.id}</Typography>
            <OrderStatus status={order.status} />
            <Typography variant="body2" mt={2}>
              {order.details}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Date: {order.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={4}>
        Orders
      </Typography>
      {/* Mostrar vista de tabla o de tarjetas dependiendo del tamaño de la pantalla */}
      {isMobile ? <CardView /> : <TableView />}
    </DashboardLayout>
  );
}
