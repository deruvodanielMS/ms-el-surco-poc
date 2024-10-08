import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Dropbox: any;
  }
}

export default function Dashboard() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadDropboxScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
      script.id = 'dropboxjs';
      script.setAttribute('data-app-key', import.meta.env.VITE_DROPBOX_APP_KEY);
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        loadDropbox();
      };
    };

    const loadDropbox = () => {
      if (window.Dropbox && embedRef.current) {
        embedRef.current.innerHTML = '';

        const options = {
          link: 'https://www.dropbox.com/scl/fo/hdbby8obdwrvolxdxhsw2/ADVJbu8Bm4VNLPvO28bdCtI?rlkey=rlp7vz5ajl1dya1ty5a5c3l0g&st=m8xnck3h&dl=0',
          folder: {
            view: 'list',
            headerSize: 'normal',
          },
        };

        window.Dropbox.embed(options, embedRef.current);
      }
    };

    if (!document.getElementById('dropboxjs')) {
      loadDropboxScript();
    } else {
      loadDropbox();
    }

    return () => {
      if (embedRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        embedRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Typography variant="h4" gutterBottom>
            Dropbox Folder
          </Typography>

          <div ref={embedRef} style={{ width: '100%', height: '500px' }}></div>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
