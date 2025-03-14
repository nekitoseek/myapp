import React, { useState } from "react";
import "./ProductCard.css";

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
        <div>
            <div className="cardBg"></div>
            <div>
                <span>{name}</span>
                {count === 0 ? (
                    <button onClick={countIncrease}>
                        +
                    </button>
                ) : (
                    <div>
                        <button onClick={countDecrease}>-</button>
                        <span>{count}</span>
                        <button onClick={countIncrease}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;