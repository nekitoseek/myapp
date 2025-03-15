import React from "react";
import ProductCard from './ProductCard/ProductCard';
import './Products.css'

const Products = () => {
    return(
        <>
        <div className="products-container">
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

export default Products;