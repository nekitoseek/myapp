import React from "react";
import './Cards.css';
import "../../Menu/GridProducts/ProductCard/ProductCard.css";
import IconMinus from '../../../images/iconMinus.svg';
import IconPlus from '../../../images/iconPlus.svg';

export default function Card() {
    return(
    <>
    <div className="cartproducts__card">
        <div className="cartproducts__card__elements">
            <div className="__element--gray-bg"></div>
            <div class="__element__name-and-dscrptn">
                Латте
            </div>
            <div className="card__kol-panel">
                <button /* onClick={func-} */ className="card__plus-minus--btn">
                    <img src={IconMinus} className="card__plus-minus--img" />
                </button>
                <div className="card__count">1
                    {/* {count} */}
                    </div>
                <button /* onClick={ func+ }*/ className="card__plus-minus--btn">
                    <img src={IconPlus} className="card__plus-minus--img"/>
                </button>
            </div>
        </div>
    </div>
    </>
    );
};