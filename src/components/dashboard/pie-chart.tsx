import { Box, Button, Collapse } from '@mui/material';
import { useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { orders } from '../../mock-data/mock-data';
import theme from '../../theme';
import { Order } from '../../types/data';
import LineChartComponent from './line-chart';

const COLORS = [
  theme.palette.info.main,
  theme.palette.success.main,
  theme.palette.warning.main,
  theme.palette.error.main,
];

const calculateOrderStatusData = (orders: Order[]) => {
  const statusMap: Record<string, number> = orders.reduce((acc, order) => {
    const status = order.status as string; // Aseguramos que es un string
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>); // Aseguramos el tipo del acumulador

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
    <Box>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
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

      {/* Botón para ver detalles */}
      <Button
        variant="text"
        onClick={handleToggle}
        sx={{ color: theme.palette.info.main }}
        endIcon={<span>⬇️</span>}
      >
        Ver detalle
      </Button>

      {/* Collapse para mostrar LineChartComponent */}
      <Collapse in={open}>
        <LineChartComponent />
      </Collapse>
    </Box>
  );
}
