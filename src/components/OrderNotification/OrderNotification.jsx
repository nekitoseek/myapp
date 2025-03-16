import React from "react";
import './OrderNotification.css';
import Checkmark from '../../images/Checkmark.png';

export default function OrderNotification({ isVisible }) {
    if (!isVisible) return null;

    return(
        <>
        <div className="overlay">
            <div className="modalwindow">
                <div>
                    <span>Ваш заказ принят в работу!</span>
                    <div className="checkmark">
                        <img src={Checkmark} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};