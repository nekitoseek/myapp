import React from "react";
import Search from './Search/Search';
import Categories from './Categories/Categories';
import Products from './GridProducts/Products';

function Menu() {
    return(
        <>
        <Search />
        <Categories />
        <Products />
        </>
    );
};

export default Menu;