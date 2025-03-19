import React from "react";
import './BuyBtn.css';

export default function BuyBtn( {onClick} ) {
    return(
        <>
        <button className="cartorder__buy-btn" onClick={onClick}>
            <span className="cartorder__buy-btn-text">Заказать</span>
        </button>
        </>
    );
};