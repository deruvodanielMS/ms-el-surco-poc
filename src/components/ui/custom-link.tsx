import { Link, LinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface CustomLinkProps extends Omit<LinkProps, 'underline'> {
  to: string;
  underline?: boolean;
}

export default function CustomLink({
  to,
  children,
  underline = false,

  ...rest
}: CustomLinkProps) {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline={underline ? 'always' : 'none'}
      sx={{
        color: 'inherit',
        padding: '0',
        textDecoration: 'none',
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
