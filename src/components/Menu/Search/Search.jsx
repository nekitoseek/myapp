import React from "react";
import searchIcon from '../../../images/search.svg'
import './Search.css';

export default function Search() {
    return(
        <>
        <div className="menu-search">
            <img src={searchIcon} className="menu-search__icon" />
            <input placeholder="Поиск" className="menu-search__input" />
        </div>
        </>
    );
};