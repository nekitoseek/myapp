import React, { useState, useEffect } from 'react';
import './OrderModal.css';
import { useCart } from '../../Context/CartContext';

export default function OrderModal({ isOpen, onClose, onSuccess }) {
    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");
    const { cart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Ошибка загрузки продуктов: ", err));
    }, []);

    const handleSubmit = async () => { // обработчик отправки формы
        // сопоставляем имя продукта и его ID
        const orders = Object.entries(cart).map(([name, count]) => {
            const matchedProduct = products.find(p => p.Name === name); // ищем продукт по имени
            if (!matchedProduct) return null; // если не найден

            return {
                count,
                fio,
                phone,
                product_id: matchedProduct.ID,
            };
        });

        try {
            for (const order of orders) { // для каждого заказа отправляем запрос на бэк

                console.log("отправляем заказ", order)

                const response = await fetch("/api/zakaz", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(order),
                });

                const responseData = await response.text();

                console.log("ответ сервера:", response.status, responseData);

                if (!response.ok) throw new Error("Ошибка при заказе");
            }

            onClose();
            onSuccess();
        } catch (error) {
            console.error("Ошибка отправки заказа:", error);
            alert("Ошибка при отправке заказа");
        }
    };

    if (!isOpen) return null; // не рендерим если не открыто МО

    return (
        <div className="ordermodal__overlay">
            <div className="ordermodal__window">
                <h2>Оформить заказ</h2>
                <input
                    type="text"
                    placeholder="ФИО"
                    value={fio}
                    onChange={(e) => setFio(e.target.value)} // обновление состояния при вводе
                    className="ordermodal__input"
                />
                <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} // обновление состояния при вводе
                    className="ordermodal__input"
                />
                <div className="ordermodal__buttons">
                    <button onClick={onClose} className="ordermodal__btn cancel">Отмена</button>
                    <button onClick={handleSubmit} className="ordermodal__btn submit">Отправить</button>
                </div>
            </div>
        </div>
    );
}