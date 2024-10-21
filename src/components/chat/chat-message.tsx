import { Box, Paper, Typography } from '@mui/material';
import theme from '../../theme';

interface ChatMessageProps {
  text: string;
  sender: string;
  timestamp: string;
  isSystem: boolean;
}

export default function ChatMessage({
  text,
  timestamp,
  isSystem,
}: ChatMessageProps) {
  return (
    <Box
      sx={{
        marginBottom: 2,
        display: 'flex',
        flexDirection: !isSystem ? 'row-reverse' : 'row',
      }}
    >
      <Paper
        sx={{
          padding: 2,
          backgroundColor: isSystem
            ? theme.palette.secondary.light
            : theme.palette.common.white,
          maxWidth: '70%',
          borderRadius: !isSystem ? '24px 24px 0 24px' : '24px 24px 24px 0',
        }}
      >
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" display="block" align="right">
          {timestamp}
        </Typography>
      </Paper>
    </Box>
  );
}
