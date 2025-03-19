import React from "react";
import './CategoryBtn.css';

export default function CategoryBtn({ categoryName, isActive, onClick }) {
    return(
        <>
        <button 
            className={`menu-categories__btn shadow-xs ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="menu-categories__name">{categoryName}</span>
        </button>
        </>
    );
};