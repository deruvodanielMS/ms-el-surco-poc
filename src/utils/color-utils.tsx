import theme from '../theme';

interface StatusColor {
  backgroundColor: string;
  textColor: string;
}

export const getColorByStatus = (status: string): StatusColor => {
  switch (status) {
    case 'Pendiente':
      return {
        backgroundColor: theme.palette.warning.main,
        textColor: theme.palette.warning.contrastText,
      };
    case 'Enviado':
      return {
        backgroundColor: theme.palette.info.main,
        textColor: theme.palette.info.contrastText,
      };
    case 'Entregado':
      return {
        backgroundColor: theme.palette.primary.main,
        textColor: theme.palette.primary.contrastText,
      };
    case 'Cancelado':
      return {
        backgroundColor: theme.palette.error.main,
        textColor: theme.palette.error.contrastText,
      };
    default:
      return {
        backgroundColor: theme.palette.grey[500],
        textColor: theme.palette.getContrastText(theme.palette.grey[500]),
      };
  }
};
