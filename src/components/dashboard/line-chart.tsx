import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { orderDataOverTime } from '../../mock-data/mock-data';
import theme from '../../theme';

export default function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={orderDataOverTime}>
        <Line
          type="monotone"
          dataKey="orders"
          stroke={theme.palette.primary.main}
        />
        <CartesianGrid stroke={theme.palette.grey[300]} />
        <XAxis dataKey="name" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
