import React from "react";
import './Header.css';
import TableProfile from "./TableProfile/TableProfile";
import CartButton from "./CartButton/CartButton";

const Header = () => {
    return(
        <>
        <div className="fullheader">
            <div className="header-container">
                <TableProfile tableNumber='7' />
                <CartButton />
            </div>
        </div>
        </>
    );
};

export default Header;