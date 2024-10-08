import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import DashboardRoute from './routes/dashboard';
import LoginRoute from './routes/login';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
