import React from "react";
import searchIcon from '../../../images/search.svg'
import './Search.css';

export default function Search() {
    return(
        <>
        <div className="search">
            <img src={searchIcon} className="search-icn" />
            <input placeholder="Поиск" className="search-ipt" />
        </div>
        </>
    );
};