import React from "react";
import './CartTableProfile.css';
import UserIcon from '../../../images/UserIcon.svg';

export default function CartTableProfile() {
    return(
        <>
        <button className="cartheader__profile-btn">
            <div className="cartheader__profile-text">Столик 7</div>
            <div className="cartheader__profile-icon">
                <img src={UserIcon} className="cartheader__profile-icon-img"/>
            </div>
        </button>
        </>
    );
};