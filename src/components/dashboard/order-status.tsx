import { Chip } from '@mui/material';
import { getColorByStatus } from '../../utils/color-utils';

interface OrderStatusProps {
  status: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const { backgroundColor, textColor } = getColorByStatus(status);

  return (
    <Chip
      label={status}
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        height: '20px',
      }}
    />
  );
};

export default OrderStatus;
