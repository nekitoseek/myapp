import React from "react";
import './CategoryBtn.css';

const CategoryBtn = ({ categoryName, isActive, onClick }) => {
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

export default CategoryBtn;