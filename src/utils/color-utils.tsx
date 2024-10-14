import theme from '../theme';

export const getColorByStatus = (status: string): string => {
  switch (status) {
    case 'Pendiente':
      return theme.palette.warning.main;
    case 'Enviado':
      return theme.palette.info.main;
    case 'Entregado':
      return theme.palette.success.main;
    case 'Cancelado':
      return theme.palette.error.main;
    default:
      return theme.palette.grey[500];
  }
};
