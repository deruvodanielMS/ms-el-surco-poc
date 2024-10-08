import { Box, Container } from '@mui/material';
import Footer from '../footer/footer';
import Header from '../header/header';

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
          alignItems="center"
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
