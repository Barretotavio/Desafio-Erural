import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './pages/Navbar/header.css';
import Navbar from './pages/Navbar/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
