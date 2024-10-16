/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import DashboardLayout from '../layouts/dashboard-layout';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Dropbox: any;
  }
}

export default function Files() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el loader
  const [hasError, setHasError] = useState(false); // Estado para manejar errores

  useEffect(() => {
    const loadDropboxScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
      script.id = 'dropboxjs';
      script.setAttribute('data-app-key', import.meta.env.VITE_DROPBOX_APP_KEY);
      script.async = true;

      script.onload = () => {
        loadDropbox();
      };

      script.onerror = () => {
        setHasError(true); // Marca el error si el script no carga
        setIsLoading(false);
      };

      document.body.appendChild(script);
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

        const observer = new MutationObserver(() => {
          const iframe = embedRef.current?.querySelector('iframe');
          if (iframe) {
            iframe.onload = () => {
              setIsLoading(false); // Ocultar el loader cuando el iframe esté completamente cargado
            };
          }
        });

        observer.observe(embedRef.current, { childList: true, subtree: true });

        return () => {
          observer.disconnect();
        };
      }
    };

    if (!document.getElementById('dropboxjs')) {
      loadDropboxScript();
    } else {
      loadDropbox();
    }

    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms = 3 segundos

    return () => {
      if (embedRef.current) {
        embedRef.current.innerHTML = '';
      }
      clearTimeout(loaderTimeout); // Limpiar el timeout al desmontar
    };
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <Typography variant="h4" gutterBottom my={5}>
          Archivos
        </Typography>

        <Box position="relative" sx={{ width: '100%', height: '500px' }}>
          {/* Loader mientras se carga Dropbox */}
          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1, // Asegura que el loader esté por encima del embedder
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
              }}
            >
              <CircularProgress />
            </Box>
          )}

          {/* Mostrar mensaje de error si ocurre un fallo */}
          {hasError && !isLoading && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <Typography color="error" variant="h6">
                Ocurrió un error al cargar los archivos de Dropbox.
              </Typography>
            </Box>
          )}

          {/* Embedder de Dropbox */}
          <div ref={embedRef} style={{ width: '100%', height: '100%' }}></div>
        </Box>
      </Container>
    </DashboardLayout>
  );
}
