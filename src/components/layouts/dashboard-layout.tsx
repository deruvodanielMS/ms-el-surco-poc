import { Box, Container } from '@mui/material';
import Footer from '../nav/footer/footer';
import Header from '../nav/header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          minHeight="100vh"
        >
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
