import React from "react";
import { useCart } from "../../Context/CartContext";
import './CartList.css';
import Card from './Cards/Cards';

export default function CartList() {
    const { cart } = useCart();

    return(
        <>
        <div className="cartproducts-container">
            {Object.entries(cart).map(([name, count]) => (
                <Card key={name} name={name} count={count} />
            ))}
        </div>
        </>
    );
};