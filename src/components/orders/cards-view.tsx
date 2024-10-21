import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Alert,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Dropbox } from 'dropbox';
import { useState } from 'react';

import { useOrders } from '../../context/orders-context';
import { useFilePreview } from '../../hooks/use-file-preview';
import { getTemporaryLink } from '../../services/dropbox-service';
import theme from '../../theme';
import { Order } from '../../types/data';
import OrderStatus from '../dashboard/order-status';
import FilePreviewDrawer from '../ui/file-preview-drawer';

// Usa el tipo `Order` que definimos anteriormente
export default function CardView({ orders }: { orders: Order[] }) {
  const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
  });
  const { generateOrderId, removeFileExtension } = useOrders(); // Obtener funciones del contexto

  const {
    selectedFile,
    fileType,
    isModalOpen,
    error,
    handleFileClick,
    handleClosePreview,
  } = useFilePreview(dbx);

  const [fileLinks, setFileLinks] = useState<{ [path: string]: string | null }>(
    {},
  );

  const handleDownload = async (file: Order) => {
    const filePath = file.path_lower;
    const cachedLink = fileLinks[filePath];
    if (cachedLink) {
      window.open(cachedLink, '_blank');
      return;
    }

    const link = await getTemporaryLink(filePath);
    if (link) {
      setFileLinks((prevLinks) => ({ ...prevLinks, [filePath]: link }));
      window.open(link, '_blank');
    } else {
      console.error('No se pudo obtener el enlace temporal');
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} minWidth={'100%'}>
      {error && <Alert severity="error">{error}</Alert>}

      {orders.map((order: Order, index: number) => (
        <Card key={order.id} sx={{ width: '100%' }}>
          <CardContent sx={{ width: '100%' }}>
            <Stack
              direction={'row'}
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography variant="h6">
                Orden #{generateOrderId(index)}
              </Typography>
              <OrderStatus status={order.status} />
            </Stack>
            <Typography variant="caption" color="text.secondary">
              Fecha: {order.date}
            </Typography>
            <Typography variant="body1">
              {removeFileExtension(order.details)}
            </Typography>
            <Typography
              variant="caption"
              mt={2}
              fontWeight={700}
              textTransform={'uppercase'}
              color={theme.palette.grey[300]}
            >
              &#x2022; {order.businessUnit}
            </Typography>

            <Box mt={2}>
              <IconButton onClick={() => handleFileClick(order)}>
                <VisibilityIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDownload(order)}
                disabled={!order.path_lower}
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}

      <FilePreviewDrawer
        open={isModalOpen}
        onClose={handleClosePreview}
        file={selectedFile}
        fileType={fileType}
      />
    </Box>
  );
}
