import React from "react";
import './BuyBtn.css';

const BuyBtn = ( {onClick} ) => {
    return(
        <>
        <button className="buy-btn" onClick={onClick}>
            <span className="buy-btn-text">Заказать</span>
        </button>
        </>
    );
};

export default BuyBtn;