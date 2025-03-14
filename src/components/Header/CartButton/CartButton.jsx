import React from "react";
import './CartButton.css';
import cartIcon from '../../../images/cartIcon.svg'

const CartButton = () => {
    return(
        <>
            <button className="cart-btn shadow-xl">
                <img src={cartIcon} className="cart-icon-img" />
            </button>
        </>
    );
}

export default CartButton;