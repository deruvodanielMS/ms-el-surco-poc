import { Link, LinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface CustomLinkProps extends Omit<LinkProps, 'underline'> {
  to: string;
  underline?: boolean; // Prop booleana opcional
}

export default function CustomLink({
  to,
  children,
  underline = false, // Valor predeterminado: sin subrayado
  ...rest
}: CustomLinkProps) {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline={underline ? 'always' : 'none'} // Convertimos el booleano a string
      sx={{
        color: 'inherit',
        '&:hover': {
          textDecoration: underline ? 'underline' : 'none',
        },
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
