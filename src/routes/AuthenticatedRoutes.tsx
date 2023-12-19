import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import Invoices from '../pages/Invoices/invoices';

const AuthenticatedRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/invoices" element={<Invoices />} />
  </Routes>
);

export default AuthenticatedRoutes;