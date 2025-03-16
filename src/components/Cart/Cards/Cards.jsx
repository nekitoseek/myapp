import React from "react";
import './Cards.css';
import IconMinus from '../../../images/iconMinus.svg';
import IconPlus from '../../../images/iconPlus.svg';

const Card = () => {
    return(
    <>
    <div className="cardincart">
        <div className="card-elements">
            <div className="gray-sqare"></div>
            <div class="card-name-and-description">
                Латте
            </div>
            <div className="kol-panel">
                <button /* onClick={func-} */ className="plus-minus-btn">
                    <img src={IconMinus} className="plus-minus-img" />
                </button>
                <div className="count">1
                    {/* {count} */}
                    </div>
                <button /* onClick={ func+ }*/ className="plus-minus-btn">
                    <img src={IconPlus} className="plus-minus-img"/>
                </button>
            </div>
        </div>
    </div>
    </>
    );
};

export default Card;