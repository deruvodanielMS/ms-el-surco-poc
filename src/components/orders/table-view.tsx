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
import { useFilePreview } from '../../hooks/use-file-preview';
import OrderStatus from '../dashboard/order-status';
import FileModal from '../files/file-modal-preview';

interface TableViewProps {
  orders: any[];
}

export default function TableView({ orders }: TableViewProps) {
  const {
    selectedFile,
    isModalOpen,
    error,
    handleFileClick,
    handleClosePreview,
  } = useFilePreview(); // Ya no necesitas pasar `dbx` si usas el hook directamente

  const handleDownload = (file: any) => {
    window.open(file.link, '_blank');
  };
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>
                  <Typography variant="subtitle2" fontWeight={700}>
                    #Orden
                  </Typography>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
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
                <TableSortLabel>
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
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.name}</TableCell>
                <TableCell>
                  <OrderStatus status={order.status} />
                </TableCell>
                <TableCell>{order.details}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      console.log('Archivo para previsualización:', order);
                      handleFileClick(order); // Asegúrate de que `order` tiene el `link`
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      console.log('Archivo para descargar:', order.link);
                      handleDownload(order); // Verifica que `order.link` no esté undefined
                    }}
                    disabled={!order.link} // Deshabilita el botón si no hay link disponible
                  >
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
