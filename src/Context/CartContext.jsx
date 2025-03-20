import React, { createContext, useState, useContext } from "react";

// контекст для корзины
const CartContext = createContext();

// хук для контекста
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (name) => {
        setCart((prev) => ({
            ...prev,
            [name]: (prev[name] || 0) + 1,
        }));
    };

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
            {children}
        </CartContext.Provider>
    );
};