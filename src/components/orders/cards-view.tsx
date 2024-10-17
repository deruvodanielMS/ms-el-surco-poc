/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useFilePreview } from '../../hooks/use-file-preview';
import theme from '../../theme';
import OrderStatus from '../dashboard/order-status';
import FilePreviewDrawer from '../ui/file-preview-drawer';

interface CardViewProps {
  orders: any[];
}

export default function CardView({ orders }: CardViewProps) {
  const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
  });

  const {
    selectedFile,
    isModalOpen,
    error,
    handleFileClick,
    handleClosePreview,
  } = useFilePreview(dbx);

  const handleDownload = (file: any) => {
    window.open(file.link, '_blank');
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} minWidth={'100%'}>
      {error && <Alert severity="error">{error}</Alert>}

      {orders.map((order) => (
        <Card key={order.id} sx={{ width: '100%' }}>
          <CardContent sx={{ width: '100%' }}>
            <Stack
              direction={'row'}
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography variant="h6">Orden #</Typography>
              <OrderStatus status={order.status} />
            </Stack>
            <Typography variant="body1">{order.name}</Typography>
            <Typography
              variant="caption"
              mt={2}
              fontWeight={700}
              textTransform={'uppercase'}
              color={theme.palette.grey[300]}
            >
              &#x2022; {order.businessUnit}
            </Typography>
            <Typography variant="body2" mt={2}>
              {order.details}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Fecha: {order.date}
            </Typography>
            <Box mt={2}>
              <IconButton
                onClick={() => {
                  console.log('Archivo para previsualización:', order);
                  handleFileClick(order); // Esta función selecciona el archivo
                }}
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  handleDownload(order); // Función para descargar
                }}
                disabled={!order.link}
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
        file={selectedFile} // Pasamos el archivo seleccionado
      />
    </Box>
  );
}
