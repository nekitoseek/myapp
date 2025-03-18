import React from "react";
import { Link } from "react-router-dom";
import './MenuHeader.css';
import TableProfile from "./TableProfile/TableProfile";
import CartButton from "./CartButton/CartButton";

export default function MenuHeader() {
    return(
        <>
        <div className="fullheader">
            <div className="header-container">
                <TableProfile tableNumber='7' />
                <Link to='/cart'>
                    <CartButton />
                </Link>
            </div>
        </div>
        </>
    );
};