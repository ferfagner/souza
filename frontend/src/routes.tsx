
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Dashboard from './pages/Dashboard/dashboard';
import Register from './pages/Register/register';

import Callback from './pages/Callback/callback'

export default function Rotas() {

   return(
    <BrowserRouter>
    <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/login" element={<Login/>}  />
           <Route path="/register" element={<Register/>}  />
           <Route path="/dashboard" element={<Dashboard/>}  />
           <Route path="/callback" element={<Callback/>}  />
           </Routes>

    </BrowserRouter>
   )
}