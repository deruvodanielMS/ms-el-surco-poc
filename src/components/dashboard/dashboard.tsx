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
        <Grid item xs={12} md={7}>
          {loading ? (
            <Skeleton variant="rectangular" height={500} />
          ) : (
            <PieChartComponent />
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          {loading ? (
            <Stack gap={1}>
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
            <OrderList />
          )}
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
