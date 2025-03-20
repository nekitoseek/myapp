import React, { useState } from "react";
import "./ProductCard.css";
import IconPlus from '../../../../images/iconPlus.svg';
import IconMinus from '../../../../images/iconMinus.svg';
import IconPlusB from '../../../../images/iconPlusBig.svg'
import { useCart } from "../../../../Context/CartContext";

export default function ProductCard({ name }) {
    // const [count, setCount] = useState(0);
    
    // const countIncrease = () => {
    //     setCount(count + 1);
    // };

    // const countDecrease = () => {
    //     if (count > 0) {
    //         setCount(count - 1);
    //     }
    // };

    const { cart, addTocart, removeFromCart } = useCart();
    const count = cart[name] || 0;
    
    return(
        <div className="menuproducts-container__card">
            <div className="card__placeforimg"></div>
            <div className="card__description">
                <div className="card__name">{name}</div>
                <div>
                    {count === 0 ? (
                        <button onClick={() => addTocart(name)} className="card__plus-btn" >
                            <img src={IconPlusB} className="card__plus-img" />
                        </button>
                    ) : (
                        <div className="card__kol-panel">
                            <button onClick={() => removeFromCart(name)} className="card__plus-minus--btn" >
                                <img src={IconMinus} className="card__plus-minus--img" />
                            </button>
                            <div className="card__count">{count}</div>
                            <button onClick={() => addTocart(name)} className="card__plus-minus--btn" >
                                <img src={IconPlus} className="card__plus-minus--img" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};