import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // работа с маршрутизацией
import { CartProvider } from './Context/CartContext.jsx';
import './index.css';
import MenuPage from './pages/MenuPage.jsx';
import CartPage from './pages/CartPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* обеспечиваем доступ к контексту для всех компонентов */}
      <BrowserRouter>
        <Routes> {/* определяем маршруты */}
          <Route path='/' element={<MenuPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);