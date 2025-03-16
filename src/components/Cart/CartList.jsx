import React from "react";
import './CartList.css';
import Card from './Cards/Cards';

const CartList = () => {
    return(
        <>
        <div className="cards-column">
            <Card />
            <Card />
            <Card />
        </div>
        </>
    );
};

export default CartList;