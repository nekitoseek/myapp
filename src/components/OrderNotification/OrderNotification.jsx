import React from "react";
import './OrderNotification.css';
import Checkmark from '../../images/Checkmark.png';

export default function OrderNotification({ isVisible }) { // пропс для контроля видимости компонента
    if (!isVisible) return null; // не рендерим компонент если =false

    return(
        <>
        <div className="notification__overlay">
            <div className="notification__modalwindow">
                <div>
                    <span>Ваш заказ принят в работу!</span>
                    <div className="notification__modalwindow__checkmark">
                        <img src={Checkmark} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};