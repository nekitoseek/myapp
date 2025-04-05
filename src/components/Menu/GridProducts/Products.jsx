import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard/ProductCard';
import './Products.css'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect ( () => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Ошибка загрузки продуктов: ", err));
    }, []);
    return(
        <>
        <div className="menuproducts-container">
            {/* <ProductCard name='Латте' />
            <ProductCard name='Капучино' />
            <ProductCard name='Американо' />
            <ProductCard name='Чай' />
            <ProductCard name='Coca-cola' />
            <ProductCard name='Pepsi' /> */}
            {products.map((product) => (
                <ProductCard key={product.ID} product={product} />
            ))}
        </div>
        </>
    );
};