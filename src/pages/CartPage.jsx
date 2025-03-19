import React, { useState } from "react";
import './CartPage.css';
import BackBtn from "../components/Cart/BackBtn/BackBtn";
import CartTableProfile from '../components/Cart/TableProfile/CartTableProfile';
import CartList from '../components/Cart/CartList';
import BuyBtn from '../components/Cart/BuyBtn/BuyBtn';
import OrderNotification from "../components/OrderNotification/OrderNotification";

export default function CartPage() {
    const[isNotificationVisible, setNotificationVisible] = useState(false);

    const handleOrder = () => {
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 3500)
    }
    return(
        <>
        <div className="cartheader">
            <BackBtn />
            <CartTableProfile />
        </div>
        <div className="cartproducts">
            <CartList />
        </div>
        <div className="cartorder">
            <BuyBtn onClick={handleOrder}/>
        </div>
        <OrderNotification isVisible={isNotificationVisible}/>
        </>
    );
};