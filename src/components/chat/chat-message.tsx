import { Box, Paper, Typography } from '@mui/material';

interface ChatMessageProps {
  text: string;
  sender: string;
  timestamp: string;
  isUser: boolean;
}

export default function ChatMessage({
  text,
  timestamp,
  isUser,
}: ChatMessageProps) {
  return (
    <Box
      sx={{
        marginBottom: 2,
        display: 'flex',
        flexDirection: isUser ? 'row-reverse' : 'row',
      }}
    >
      <Paper
        sx={{
          padding: 2,
          backgroundColor: isUser ? '#89BCD8' : '#F0F0F0',
          maxWidth: '70%',
          borderRadius: '12px',
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
