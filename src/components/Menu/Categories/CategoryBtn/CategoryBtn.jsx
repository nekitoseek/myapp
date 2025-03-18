import React from "react";
import './CategoryBtn.css';

export default function CategoryBtn({ categoryName, isActive, onClick }) {
    return(
        <>
        <button 
            className={`category-btn shadow-xs ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="category-name">{categoryName}</span>
        </button>
        </>
    );
};