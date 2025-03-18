import React from "react";
import './Menu.css';
import Search from './Search/Search';
import Categories from './Categories/Categories';
import Products from './GridProducts/Products';

export default function Menu() {
    return(
        <>
        <div className="menu-container">
            <div className="menu-h1">Меню</div>
            <Search />
            <Categories />
            <Products />
        </div>
        </>
    );
};