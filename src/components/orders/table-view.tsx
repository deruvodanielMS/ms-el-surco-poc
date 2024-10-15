// src/pages/orders/TableView.tsx
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { orders } from '../../mock-data/mock-data';
import OrderStatus from '../dashboard/order-status';

export default function TableView() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={700}>
                #Orden
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={700}>
                Estado
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={700}>
                Comentarios
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={700}>
                Fecha
              </Typography>
            </TableCell>
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
}
