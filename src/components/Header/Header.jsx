import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import TableProfile from "./TableProfile/TableProfile";
import CartButton from "./CartButton/CartButton";

const Header = () => {
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

export default Header;