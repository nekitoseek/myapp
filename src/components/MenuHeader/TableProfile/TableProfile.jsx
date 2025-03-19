import React from "react";
import './TableProfile.css';
import UserIcon from "../../../images/UserIcon.svg";

export default function TableProfile({ tableNumber }) {
    return (
        <>
        <button className="menuheader__profile-btn shadow-xl">
            <div className="menuheader__profile-icon">
                <img src={UserIcon} className="menuheader__profile-icon-img"/>
            </div>
            <div className="menuheader__profile-text">
                    столик {tableNumber}
            </div>
        </button>
        </>
    );
};