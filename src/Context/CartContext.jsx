import React, { createContext, useState, useContext } from "react";

// контекст для корзины
const CartContext = createContext();

// хук для контекста
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => { // компонент, дающий контекст корзины всем дочерним элементам
    const [cart, setCart] = useState({}); // инициализируем состояние корзины как пустой объект

    // добавление товара в корзину
    const addToCart = (name) => {
        setCart((prev) => ({
            ...prev, // cоздаем новый объект корзины, копируя старую корзину.
            [name]: (prev[name] || 0) + 1, // увеличиваем количество товара на 1. Если товара нет, то устанавливаем количество равным 1.
        }));
    };

    // удаление товара из корзины
    const removeFromCart = (name) => {
        setCart((prev) => {
            if (!prev[name]) return prev;
            const updatedCart = { ...prev };
            if (prev[name] === 1) {
                delete updatedCart[name];
            } else {
                updatedCart[name] -= 1;
            }
            return updatedCart;
        });
    };
    
    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {/* Оборачиваем дочерние компоненты чтобы получить доступ к контексту */}
            {children}
        </CartContext.Provider>
    );
};