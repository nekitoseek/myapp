import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CartPage.css';
import BackBtn from "../components/Cart/BackBtn/BackBtn";
import CartTableProfile from '../components/Cart/TableProfile/CartTableProfile';
import CartList from '../components/Cart/CartList';
import BuyBtn from '../components/Cart/BuyBtn/BuyBtn';
import OrderNotification from "../components/OrderNotification/OrderNotification";

const CartPage = () => {
    const[isNotificationVisible, setNotificationVisible] = useState(false);

    const handleOrder = () => {
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 3500)
    }
    return(
        <>
        <div className="back-and-profile">
            <BackBtn />
            <CartTableProfile />
        </div>
        <div className="list-products">
            <CartList />
        </div>
        <div className="btnincart">
            <BuyBtn onClick={handleOrder}/>
        </div>
        <OrderNotification isVisible={isNotificationVisible}/>
        </>
    );
};

export default CartPage;