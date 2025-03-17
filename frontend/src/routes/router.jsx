import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/" element={<Login />} />
        
        {/* Rutas protegidas */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Ruta 404 - Redirige a la página principal */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;