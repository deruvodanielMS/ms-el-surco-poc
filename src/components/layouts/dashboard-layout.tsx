import { Box, Container } from '@mui/material';
import ScrollToTop from '../../utils/scroll-to-top';
import Footer from '../nav/footer/footer';
import Header from '../nav/header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          minHeight="100vh"
          pb={4}
          pt={'100px'}
        >
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
