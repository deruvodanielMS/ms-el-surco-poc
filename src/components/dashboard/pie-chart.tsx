/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import theme from '../../theme';
import { Order } from '../../types/data'; // Asegúrate de que esté importado

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

// Función para personalizar el label dentro de los segmentos del gráfico
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Ajustar la posición del label al centro del segmento
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white" // El color del texto dentro de los segmentos
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
    >
      {value}
    </text>
  );
};

export default function PieChartComponent({ orders }: { orders: Order[] }) {
  const pieChartData = calculateOrderStatusData(orders); // Calcula los datos de la gráfica con las órdenes recibidas

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        borderRadius: '24px',
        padding: '24px',
        height: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Orden por estado
      </Typography>
      <Typography variant="body2" gutterBottom>
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

      <Box
        sx={{
          width: '100%',
          // Definimos diferentes alturas para distintos tamaños de pantalla
          height: {
            xs: 200, // Pantallas pequeñas
            sm: 300, // Pantallas medianas
            md: 400, // Pantallas grandes
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
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
              labelLine={false} // Desactiva las líneas de referencia
              label={renderCustomizedLabel} // Usa la función personalizada para centrar los labels dentro de los segmentos
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
      </Box>
    </Box>
  );
}
