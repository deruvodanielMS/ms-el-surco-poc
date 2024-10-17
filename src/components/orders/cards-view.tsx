/* eslint-disable @typescript-eslint/no-explicit-any */
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Alert,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { Dropbox } from 'dropbox';
import { useFilePreview } from '../../hooks/use-file-preview';
import OrderStatus from '../dashboard/order-status';
import FileModal from '../files/file-modal-preview';

export default function CardView({ orders }: any) {
  const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
  });

  const {
    selectedFile,
    isModalOpen,
    error,
    handleFileClick,
    handleDownload,
    handleClosePreview,
  } = useFilePreview(dbx);

  return (
    <Box display="flex" flexDirection="column" gap={2} minWidth={'100%'}>
      {error && <Alert severity="error">{error}</Alert>}

      {orders.map((order) => (
        <Card key={order.id} sx={{ width: '100%' }}>
          <CardContent sx={{ width: '100%' }}>
            <Typography variant="h6">Orden #</Typography>
            <Typography variant="body1">{order.name}</Typography>
            <OrderStatus status={order.status} />
            <Typography variant="body2" mt={2}>
              {order.details}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Fecha: {order.date}
            </Typography>
            <Box mt={2}>
              <IconButton
                onClick={() => handleFileClick(order)} // Asegúrate de que order tiene tempLink
                disabled={!order.tempLink} // Deshabilitar si no tiene tempLink
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDownload(order)} // Asegúrate de que order tiene tempLink
                disabled={!order.tempLink} // Deshabilitar si no tiene tempLink
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}

      <FileModal
        open={isModalOpen}
        onClose={handleClosePreview}
        file={selectedFile}
      />
    </Box>
  );
}
