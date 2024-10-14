// En algún componente donde necesites usar la función
import { Chip } from '@mui/material';
import { getColorByStatus } from '../../utils/color-utils';

interface OrderStatusProps {
  status: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const color = getColorByStatus(status);

  return <Chip label={status} sx={{ backgroundColor: color, color: '#000' }} />;
};

export default OrderStatus;
