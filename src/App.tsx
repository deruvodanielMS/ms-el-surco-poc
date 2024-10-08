import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import DashboardRoute from './routes/dashboard';
import FilesRoute from './routes/files';
import LoginRoute from './routes/login';
import OrdersRoute from './routes/orders';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/files" element={<FilesRoute />} />
          <Route path="/orders" element={<OrdersRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
