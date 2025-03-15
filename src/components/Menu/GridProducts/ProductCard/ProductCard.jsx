import React, { useState } from "react";
import "./ProductCard.css";
import IconPlus from '../../../../images/iconPlus.svg';
import IconMinus from '../../../../images/iconMinus.svg';
import IconPlusB from '../../../../images/iconPlusBig.svg'

const ProductCard = ({ name }) => {
    const [count, setCount] = useState(0);
    
    const countIncrease = () => {
        setCount(count + 1);
    };

    const countDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    
    return(
        <div className="card">
            <div className="placeforimg"></div>
            <div className="card-dscrptn">
                <div className="card-name">{name}</div>
                <div className="">
                    {count === 0 ? (
                        <button onClick={countIncrease} className="plus-btn" >
                            <img src={IconPlusB} className="plus-img" />
                        </button>
                    ) : (
                        <div className="kol-panel">
                            <button onClick={countDecrease} className="plus-minus-btn" >
                                <img src={IconMinus} className="plus-minus-img" />
                            </button>
                            <div className="count">{count}</div>
                            <button onClick={countIncrease} className="plus-minus-btn" >
                            <img src={IconPlus} className="plus-minus-img" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;