/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SetStateAction, useEffect, useState } from 'react';
import { listFolderFiles } from '../../services/dropbox-service'; // Servicio para listar archivos de Dropbox
import DashboardLayout from '../layouts/dashboard-layout';
import TableView from './table-view';

export default function Orders() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [orders, setOrders] = useState<any[]>([]); // Estado para almacenar órdenes
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error

  // Función para mapear el nombre de la carpeta al estado correspondiente
  const mapFolderToStatus = (folderName: string) => {
    switch (folderName.toLowerCase()) {
      case 'pendiente':
        return 'Pendiente';
      case 'enviado':
        return 'Enviado';
      case 'entregado':
        return 'Entregado';
      case 'cancelado':
        return 'Cancelado';
      default:
        return 'Desconocido'; // Estado por defecto si no coincide
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        // Llama al servicio para listar todas las carpetas dentro de la carpeta "Órdenes"
        const ordersFolders = await listFolderFiles(
          '/Carpeta del Usuario/Órdenes',
        );

        // Inicializa un array para almacenar las órdenes formateadas
        let allOrders: SetStateAction<any[]> = [];

        for (const folder of ordersFolders) {
          if (folder['.tag'] === 'folder') {
            // Llama al servicio para listar los archivos dentro de cada subcarpeta
            const filesInFolder = await listFolderFiles(folder.path_lower);

            const formattedOrders = filesInFolder.map((file) => ({
              id: file.id, // Usa el id único del archivo de Dropbox
              name: file.name, // Usa el nombre original del archivo
              status: mapFolderToStatus(folder.name), // Asigna el estado dinámicamente
              details: `Detalles de la orden ${file.name}`, // Placeholder para detalles
              date: new Date().toISOString().slice(0, 10), // Placeholder para la fecha
              path_lower: file.path_lower, // Mantén el path_lower para usarlo con Dropbox
              link: file.link,
            }));

            // Agrega las órdenes formateadas al array principal
            allOrders = [...allOrders, ...formattedOrders];
          }
        }

        setOrders(allOrders); // Actualiza el estado con las órdenes
      } catch (err) {
        setError('Error al cargar órdenes desde Dropbox');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            width: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom my={4}>
        Órdenes
      </Typography>
      <Box minWidth={'100%'}>
        <TableView orders={orders} />
        {/* {isMobile ? (
          <CardView orders={orders} />
        ) : (
          <TableView orders={orders} />
        )} */}
      </Box>
    </DashboardLayout>
  );
}
