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
import { useState } from 'react';
import { useFilePreview } from '../../hooks/use-file-preview';
import { getTemporaryLink } from '../../services/dropbox-service'; // Importar la función para obtener el temporary link
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

  // Estado para almacenar los enlaces temporales obtenidos
  const [fileLinks, setFileLinks] = useState<{ [path: string]: string | null }>(
    {},
  );

  // Función para manejar la descarga y obtener el enlace solo cuando sea necesario
  const handleDownload = async (file: any) => {
    const filePath = file.path_lower;

    // Si ya tenemos el enlace en caché, lo usamos
    const cachedLink = fileLinks[filePath];
    if (cachedLink) {
      window.open(cachedLink, '_blank');
      return;
    }

    // Si no, obtenemos el enlace temporal y lo almacenamos en caché
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

      {orders.map((order) => (
        <Card key={order.id} sx={{ width: '100%' }}>
          <CardContent sx={{ width: '100%' }}>
            <Stack
              direction={'row'}
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography variant="h6">Orden #{order.name}</Typography>
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
                  handleFileClick(order); // Esta función selecciona el archivo para previsualización
                }}
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  handleDownload(order); // Función para descargar el archivo cuando se haga clic
                }}
                disabled={!order.path_lower} // Solo habilitamos el botón si existe `path_lower`
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}

      {/* Drawer para previsualización del archivo */}
      <FilePreviewDrawer
        open={isModalOpen}
        onClose={handleClosePreview}
        file={selectedFile} // Pasamos el archivo seleccionado
      />
    </Box>
  );
}
