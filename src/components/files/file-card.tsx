/* eslint-disable @typescript-eslint/no-explicit-any */
import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';

interface FileCardProps {
  file: any;
  onFileClick: (file: any) => void;
}

export default function FileCard({ file, onFileClick }: FileCardProps) {
  const handleDownload = (file: any) => {
    if (file.tempLink) {
      window.open(file.tempLink, '_blank'); // Utiliza el tempLink para descargar
    } else {
      setError('No se puede descargar este archivo.');
    }
  };

  return (
    <Card
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        {file['.tag'] === 'folder' ? (
          <FolderIcon fontSize="large" color="primary" />
        ) : (
          <InsertDriveFileIcon fontSize="large" color="secondary" />
        )}
        <Typography variant="subtitle1" gutterBottom>
          {file.name}
        </Typography>
      </CardContent>
      {file['.tag'] === 'file' && (
        <CardActions>
          <IconButton onClick={() => onFileClick(file)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => handleDownload(file)}>
            <DownloadIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
