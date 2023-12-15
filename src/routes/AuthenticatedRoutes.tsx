import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';

const AuthenticatedRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    {/* Adicione mais rotas autenticadas conforme necessário */}
  </Routes>
);

export default AuthenticatedRoutes;