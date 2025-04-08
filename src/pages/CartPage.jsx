import React, { useState } from "react";
import './CartPage.css';
import BackBtn from "../components/Cart/BackBtn/BackBtn";
import CartTableProfile from '../components/Cart/TableProfile/CartTableProfile';
import CartList from '../components/Cart/CartList';
import BuyBtn from '../components/Cart/BuyBtn/BuyBtn';
import OrderNotification from "../components/OrderNotification/OrderNotification";
import OrderModal from "../components/OrderModal/OrderModal";

export default function CartPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const[isNotificationVisible, setNotificationVisible] = useState(false);

    const handleBuyClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOrderSuccess = () => {
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 3500);
    };

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
            <BuyBtn onClick={handleBuyClick}/>
        </div>
        <OrderModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSuccess={handleOrderSuccess}
            // count={count}
            // productId={productId}
        />
        <OrderNotification isVisible={isNotificationVisible}/>
        </>
    );
};