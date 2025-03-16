import React from "react";
import './TableProfile.css';
import UserIcon from '../../../images/UserIcon.svg'

const TableProfile = ({ tableNumber }) => {
    return (
        <>
        <button className="table-btn shadow-xl">
            <div className="tableProfile-icon">
                <img src={UserIcon} className="tableProfile-icon-img"/>
            </div>
            <div className="tableProfile-text">
                    столик {tableNumber}
            </div>
        </button>
        </>
    );
};

export default TableProfile;