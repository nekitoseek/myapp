import React from 'react';
// import './MenuPage.css';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import Menu from '../components/Menu/Menu';
import ProductList from '../api/products'

export default function MenuPage() {
  return (
    <>
    <MenuHeader />
    <Menu />
    <ProductList />
    </>
  )
};
