import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { orderDataOverTime } from '../../mock-data/mock-data';

export default function LineChartComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas

  return (
    <Box
      sx={{ borderTop: '1px solid', borderColor: theme.palette.grey[100] }}
      mt={2}
    >
      <Typography variant="h6" gutterBottom mt={2}>
        Comparativa 2023-2024
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={orderDataOverTime}>
          <CartesianGrid stroke={theme.palette.grey[300]} />
          <XAxis dataKey="name" />
          {/* Renderiza el YAxis solo si no es móvil */}
          {!isMobile && <YAxis />}
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="2023"
            stroke={theme.palette.primary.main}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="2024"
            stroke={theme.palette.secondary.main}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
