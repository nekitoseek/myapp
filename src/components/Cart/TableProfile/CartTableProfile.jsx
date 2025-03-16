import React from "react";
import './CartTableProfile.css';
import UserIcon from '../../../images/UserIcon.svg';

const CartTableProfile = () => {
    return(
        <>
        <button className="TP-btn">
            <div className="tableProfile-text">Столик 7</div>
            <div className="tableProfile-icon">
                <img src={UserIcon} className="tableProfile-icon-img"/>
            </div>
        </button>
        </>
    );
};

export default CartTableProfile;