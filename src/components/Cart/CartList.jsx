import React from "react";
import './CartList.css';
import Card from './Cards/Cards';

export default function CartList() {
    return(
        <>
        <div className="cartproducts-container">
            <Card />
            <Card />
            <Card />
        </div>
        </>
    );
};