import { Box, Typography } from '@mui/material';
import CustomLink from '../../ui/custom-link';

export default function Logo() {
  return (
    <CustomLink to="/dashboard">
      <Box display="flex" alignItems="center" gap={2}>
        <img src="/gs-icon.png" alt="Logo" style={{ height: '50px' }} />
        <Typography variant="h6">Grupo El Surco</Typography>
      </Box>
    </CustomLink>
  );
}
