import { Box, Button, Collapse, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { orders } from '../../mock-data/mock-data';
import theme from '../../theme';
import { Order } from '../../types/data';
import LineChartComponent from './line-chart';

const COLORS = [
  theme.palette.info.main,
  theme.palette.primary.main,
  theme.palette.warning.main,
  theme.palette.error.main,
];

// Referencias para cada estado
const statusLabels = [
  { color: theme.palette.info.main, label: 'Enviado' },
  { color: theme.palette.primary.main, label: 'Pendiente' },
  { color: theme.palette.warning.main, label: 'Entregado' },
  { color: theme.palette.error.main, label: 'Cancelado' },
];

const calculateOrderStatusData = (orders: Order[]) => {
  const statusMap: Record<string, number> = orders.reduce((acc, order) => {
    const status = order.status as string;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.keys(statusMap).map((status) => ({
    name: status,
    value: statusMap[status],
  }));
};

const pieChartData = calculateOrderStatusData(orders);

export default function PieChartComponent() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

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
        Orden por estado
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        1 Agosto - 30 Septiembre
      </Typography>

      {/* Leyenda de colores */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          my: 2,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {statusLabels.map((status, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                backgroundColor: status.color,
                borderRadius: '4px',
                marginRight: '8px',
              }}
            />
            <Typography variant="body2">{status.label}</Typography>
          </Box>
        ))}
      </Box>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            paddingAngle={0.2}
            dataKey="value"
            stroke="white"
            strokeWidth={2}
            labelLine={true}
            label={({ value }) => `${value}`}
          >
            {pieChartData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <Stack alignItems={'end'} sx={{ marginTop: 2 }}>
        <Button
          variant="text"
          onClick={handleToggle}
          color="secondary"
          sx={{
            display: 'flex',
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
      </Stack>

      <Collapse in={open}>
        <LineChartComponent />
      </Collapse>
    </Box>
  );
}
