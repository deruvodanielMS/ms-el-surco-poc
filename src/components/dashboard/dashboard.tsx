import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Button,
  Collapse,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useOrders } from '../../context/orders-context';
import DashboardLayout from '../layouts/dashboard-layout';
import LineChartComponent from './line-chart';
import OrderList from './order-list';
import PieChartComponent from './pie-chart';

export default function Dashboard() {
  const { orders, error } = useOrders(); // Accede a las órdenes del contexto
  const [loading, setLoading] = useState(true); // Cambiará cuando las órdenes estén cargadas
  const chartRef = useRef<HTMLDivElement>(null); // Referencia para el gráfico
  const orderListRef = useRef<HTMLDivElement>(null); // Referencia para la lista de órdenes
  const [open, setOpen] = useState(false); // Controla la apertura del colapso

  useEffect(() => {
    // Detecta si las órdenes ya están disponibles para dejar de mostrar el Skeleton
    if (orders.length > 0) {
      setLoading(false); // Solo se desactiva cuando las órdenes estén completamente cargadas
    }
  }, [orders]);

  const handleToggle = () => {
    setOpen(!open); // Alterna la apertura/cierre del Collapse
  };

  if (error) {
    return (
      <DashboardLayout>
        <Typography variant="h4" gutterBottom my={5} textAlign="left">
          Error al cargar las órdenes
        </Typography>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={5} textAlign="left">
        Dashboard
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {/* Orden en móvil: mostrar primero las órdenes */}
        <Grid
          item
          xs={12}
          md={5}
          order={{ xs: 1, md: 2 }}
          sx={{ display: 'flex', flexDirection: 'column' }}
          ref={orderListRef}
        >
          {loading ? (
            <Stack gap={1} sx={{ flexGrow: 1 }}>
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
              <Skeleton variant="rectangular" height={55} />
            </Stack>
          ) : (
            <OrderList orders={orders} /> // Pasa solo las órdenes visibles
          )}
        </Grid>

        {/* Orden en móvil: mostrar después el gráfico */}
        <Grid
          item
          xs={12}
          md={7}
          order={{ xs: 2, md: 1 }}
          sx={{ display: 'flex', flexDirection: 'column' }}
          ref={chartRef}
        >
          {loading ? (
            <Skeleton variant="rectangular" height={500} sx={{ flexGrow: 1 }} />
          ) : (
            <PieChartComponent orders={orders} />
          )}
        </Grid>

        {/* Botón para abrir el gráfico comparativo, debajo de ambos contenedores */}
        <Grid item xs={12} md={12} order={{ xs: 3, md: 3 }} sx={{ mt: 2 }}>
          <Button
            variant="text"
            onClick={handleToggle}
            color="secondary"
            sx={{
              width: '100%', // Ocupa el 100% del ancho
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
            endIcon={
              <ArrowDownwardIcon
                sx={{
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            }
          >
            Comparar con el año pasado
          </Button>
        </Grid>

        {/* Colapso del gráfico comparativo */}
        <Grid item xs={12} md={12} order={{ xs: 4, md: 4 }}>
          <Collapse in={open}>
            <LineChartComponent />
          </Collapse>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
