import React from "react";
import { useCart } from "../../Context/CartContext";
import './CartList.css';
import Card from './Cards/Cards';

export default function CartList() {
    const { cart } = useCart(); // извлекаем корзину из контекста

    return (
        <>
        <div className="cartproducts-container">
            {Object.entries(cart).map(([name, count]) => ( // перебор всех товаров
                <Card key={name} name={name} count={count} /> // используем имя в качестве ключа
            ))}
        </div>
        </>
    );
};