import React, { useState } from "react";
import "./ProductCard.css";
import IconPlus from '../../../../images/iconPlus.svg';
import IconMinus from '../../../../images/iconMinus.svg';

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
                <div>
                    {count === 0 ? (
                        <button onClick={countIncrease}>
                            <img src={IconPlus} />
                        </button>
                    ) : (
                        <div>
                            <button onClick={countDecrease}>
                                <img src={IconMinus} />
                            </button>
                            <span>{count}</span>
                            <button onClick={countIncrease}>
                            <img src={IconPlus} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;