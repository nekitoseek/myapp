import React from "react";
import ProductCard from './ProductCard/ProductCard';
import './Products.css'

export default function Products() {
    return(
        <>
        <div className="menuproducts-container">
            <ProductCard name='Латте' />
            <ProductCard name='Капучино' />
            <ProductCard name='Американо' />
            <ProductCard name='Чай' />
            <ProductCard name='Coca-cola' />
            <ProductCard name='Pepsi' />
        </div>
        </>
    );
};