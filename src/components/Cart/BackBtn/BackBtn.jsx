import React from "react";
import { Link } from "react-router-dom";
import './BackBtn.css';
import BackIcon from '../../../images/backIcon.svg';

export default function BackBtn() {
    return(
        <>
        <Link to='/' className="back-btn">
            <button>
                <img src={BackIcon} />
            </button>
        </Link>
        </>
    );
};