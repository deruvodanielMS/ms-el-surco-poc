import { Grid, Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/dashboard-layout';
import OrderList from './order-list';
import PieChartComponent from './pie-chart';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={5} textAlign="left">
        Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Orden por estado
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            1 Agosto - 30 Septiembre
          </Typography>
          {loading ? (
            <Skeleton variant="rectangular" height={300} />
          ) : (
            <PieChartComponent />
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Órdenes recientes
          </Typography>
          {loading ? (
            <Stack gap={1}>
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
            </Stack>
          ) : (
            <OrderList />
          )}
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
