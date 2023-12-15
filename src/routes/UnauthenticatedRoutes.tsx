import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    {/* Adicione mais rotas não autenticadas conforme necessário */}
  </Routes>
);

export default UnauthenticatedRoutes;
