/* eslint-disable @typescript-eslint/no-explicit-any */
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Alert,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { Dropbox } from 'dropbox';
import { useState } from 'react';
import { useFilePreview } from '../../hooks/use-file-preview';
import { getTemporaryLink } from '../../services/dropbox-service'; // Nuevo import
import theme from '../../theme';
import OrderStatus from '../dashboard/order-status';
import FileModal from '../ui/file-preview-modal';

interface TableViewProps {
  orders: any[];
}

type OrderKey = 'name' | 'businessUnit' | 'status' | 'date';

// Definir un mapa de prioridad para los estados
const statusPriority: { [key: string]: number } = {
  Pendiente: 1,
  Enviado: 2,
  Entregado: 3,
  Cancelado: 4,
};

export default function TableView({ orders }: TableViewProps) {
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

  // Estados para manejar el sort
  const [orderBy, setOrderBy] = useState<OrderKey>('name'); // Columna por la cual ordenar
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc'); // Dirección del ordenamiento

  // Estado para almacenar los enlaces temporales obtenidos
  const [fileLinks, setFileLinks] = useState<{ [path: string]: string | null }>(
    {},
  );

  // Función para obtener el link del archivo bajo demanda
  const handleDownload = async (file: any) => {
    const filePath = file.path_lower;

    // Si ya tenemos el link en caché, lo usamos
    const cachedLink = fileLinks[filePath];
    if (cachedLink) {
      window.open(cachedLink, '_blank');
      return;
    }

    // Si no, lo obtenemos y lo almacenamos en caché
    const link = await getTemporaryLink(filePath);
    if (link) {
      setFileLinks((prevLinks) => ({ ...prevLinks, [filePath]: link }));
      window.open(link, '_blank'); // Solo abrimos si el link no es null
    } else {
      console.error('No se pudo obtener el enlace temporal');
    }
  };

  // Función para manejar el click de las cabeceras de las columnas
  const handleSortRequest = (property: OrderKey) => {
    const isAsc = orderBy === property && orderDirection === 'asc';
    setOrderBy(property);
    setOrderDirection(isAsc ? 'desc' : 'asc');
  };

  // Función para ordenar los datos
  const sortedOrders = [...orders].sort((a, b) => {
    if (orderBy === 'name' || orderBy === 'businessUnit') {
      return orderDirection === 'asc'
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    } else if (orderBy === 'date') {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return orderDirection === 'asc'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    } else if (orderBy === 'status') {
      const statusA = statusPriority[a.status] || 0;
      const statusB = statusPriority[b.status] || 0;
      return orderDirection === 'asc' ? statusA - statusB : statusB - statusA;
    }
    return 0;
  });

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? orderDirection : 'asc'}
                  onClick={() => handleSortRequest('name')}
                >
                  <Typography variant="subtitle2" fontWeight={700}>
                    #Orden
                  </Typography>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'businessUnit'}
                  direction={
                    orderBy === 'businessUnit' ? orderDirection : 'asc'
                  }
                  onClick={() => handleSortRequest('businessUnit')}
                >
                  <Typography variant="subtitle2" fontWeight={700}>
                    Unidad de negocio
                  </Typography>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'status'}
                  direction={orderBy === 'status' ? orderDirection : 'asc'}
                  onClick={() => handleSortRequest('status')}
                >
                  <Typography variant="subtitle2" fontWeight={700}>
                    Estado
                  </Typography>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={700}>
                  Comentarios
                </Typography>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'date'}
                  direction={orderBy === 'date' ? orderDirection : 'asc'}
                  onClick={() => handleSortRequest('date')}
                >
                  <Typography variant="subtitle2" fontWeight={700}>
                    Fecha
                  </Typography>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={700}>
                  Acciones
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.name}</TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    mt={2}
                    fontWeight={700}
                    textTransform={'uppercase'}
                    color={theme.palette.grey[300]}
                  >
                    &#x2022; {order.businessUnit}
                  </Typography>
                </TableCell>
                <TableCell>
                  <OrderStatus status={order.status} />
                </TableCell>
                <TableCell>{order.details}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleFileClick(order)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDownload(order)}>
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal para previsualización */}
      <FileModal
        open={isModalOpen}
        onClose={handleClosePreview}
        file={selectedFile}
      />
    </>
  );
}
