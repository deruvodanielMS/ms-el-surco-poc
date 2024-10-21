/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { listFolderFiles } from '../services/dropbox-service';

// Definir el tipo de las órdenes
interface Order {
  id: string;
  name: string;
  status: string;
  businessUnit: string;
  details: string;
  date: string;
  path_lower: string;
  link: string;
}

interface OrdersContextType {
  orders: Order[];
  loading: boolean;
  error: string | null;
  generateOrderId: (index: number) => string; // Nueva función para generar IDs únicos
  removeFileExtension: (filename: string) => string; // Nueva función para eliminar extensiones
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

// Tipado para el proveedor
interface OrdersProviderProps {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Función para generar un ID único
  const generateOrderId = (index: number): string => `ORD-${index + 1}`;

  // Función para eliminar la extensión de un archivo
  const removeFileExtension = (filename: string): string =>
    filename.replace(/\.[^/.]+$/, '');

  // Definición de la función que mapea el estado de las órdenes
  const mapFolderToStatus = (folderName: string): string => {
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
        return 'Desconocido';
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const businessUnits = await listFolderFiles(
          '/Carpeta del Usuario/Órdenes',
          true,
        );

        let allOrders: Order[] = [];

        for (const businessUnit of businessUnits) {
          if (businessUnit['.tag'] === 'folder') {
            const businessUnitName = businessUnit.name;
            const stateFolders = await listFolderFiles(businessUnit.path_lower);

            for (const folder of stateFolders) {
              if (folder['.tag'] === 'folder') {
                const status = mapFolderToStatus(folder.name);
                const filesInFolder = await listFolderFiles(folder.path_lower);

                const formattedOrders = filesInFolder.map((file: any) => ({
                  id: file.id,
                  name: file.name,
                  status: status,
                  businessUnit: businessUnitName,
                  details: `${file.name}`,
                  date: new Date().toISOString().slice(0, 10),
                  path_lower: file.path_lower,
                  link: file.link,
                }));

                allOrders = [...allOrders, ...formattedOrders];
              }
            }
          }
        }

        setOrders(allOrders);
      } catch (err) {
        setError('Error al cargar órdenes desde Dropbox');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <OrdersContext.Provider
      value={{ orders, loading, error, generateOrderId, removeFileExtension }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

// Hook para acceder al contexto
export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders debe ser usado dentro de un OrdersProvider');
  }
  return context;
};
