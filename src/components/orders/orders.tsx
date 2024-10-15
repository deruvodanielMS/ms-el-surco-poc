// src/pages/orders/Orders.tsx

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardLayout from '../layouts/dashboard-layout';
import CardView from './cards-view';
import TableView from './table-view';

export default function Orders() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={4}>
        Órdenes
      </Typography>
      {/* Mostrar vista de tabla o de tarjetas dependiendo del tamaño de la pantalla */}
      <Box minWidth={'100%'}>{isMobile ? <CardView /> : <TableView />}</Box>
    </DashboardLayout>
  );
}
