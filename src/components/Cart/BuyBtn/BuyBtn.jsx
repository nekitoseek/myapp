import React from "react";
import './BuyBtn.css';

export default function BuyBtn( {onClick} ) {
    return(
        <>
        <button className="buy-btn" onClick={onClick}>
            <span className="buy-btn-text">Заказать</span>
        </button>
        </>
    );
};