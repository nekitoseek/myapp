import React from "react";
import "./ProductCard.css";
import IconPlus from '../../../../images/iconPlus.svg';
import IconMinus from '../../../../images/iconMinus.svg';
import IconPlusB from '../../../../images/iconPlusBig.svg'
import { useCart } from "../../../../Context/CartContext";

export default function ProductCard({ product }) {
    const { Name, Image, Description, Count } = product;
    const { cart, addToCart, removeFromCart } = useCart();
    const count = cart[Name] || 0;
    
    return (
        <div className="menuproducts-container__card">
            <div className="card__placeforimg">
                <img src={Image} alt={Name} />
            </div>
            <div className="card__description">
                <div className="card__name">{Name}, {Description}, {Count}</div>
                <div>
                    {count === 0 ? (
                        <button onClick={() => addToCart(Name)} className="card__plus-btn" >
                            <img src={IconPlusB} className="card__plus-img" />
                        </button>
                    ) : (
                        <div className="card__kol-panel">
                            <button onClick={() => removeFromCart(Name)} className="card__plus-minus--btn" >
                                <img src={IconMinus} className="card__plus-minus--img" />
                            </button>
                            <div className="card__count">{count}</div>
                            <button onClick={() => addToCart(Name)} className="card__plus-minus--btn" >
                                <img src={IconPlus} className="card__plus-minus--img" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};