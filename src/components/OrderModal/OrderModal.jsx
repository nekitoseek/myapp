import React, { useState } from 'react';
import './OrderModal.css';

export default function OrderModal({ isOpen, onClose, onSuccess, count, productId }) {
    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async () => {
        const order = {
            count,
            fio,
            phone,
            productId: productId,
        };
        console.log(order)
        try {
            const response = await fetch("api/zakaz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            });

            if (!response.ok) throw new Error("Ошибка при заказе");

            onClose();
            onSuccess();
        } catch (error) {
            console.error("Ошибка отправки заказа:", error);
            alert("Ошибка при отправке заказа");
        }
    };
    if (!isOpen) return null;

    return (
        <>
        <div className="ordermodal__overlay">
            <div className="ordermodal__window">
                <h2>Оформить заказ</h2>
                <input
                    type="text"
                    placeholder="ФИО"
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    className="ordermodal__input"
                />
                <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="ordermodal__input"
                />
                <div className="ordermodal__buttons">
                    <button onClick={onClose} className="ordermodal__btn cancel">Отмена</button>
                    <button onClick={handleSubmit} className="ordermodal__btn submit">Отправить</button>
                </div>
            </div>
        </div>
        </>
    )
}