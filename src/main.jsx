import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import MenuPage from './pages/MenuPage.jsx';
import CartPage from './pages/CartPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);