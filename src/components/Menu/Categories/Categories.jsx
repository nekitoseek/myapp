import React, { useState } from "react";
import './Categories.css'
import CategoryBtn from './CategoryBtn/CategoryBtn';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState("Все");
    const categories = ["Все", "Кофе", "Чай", "Газ. напитки", "Коктейли", "Алкоголь"];
    return(
        <>
        <div className="categories">
            {categories.map((category) => (
                <CategoryBtn 
                    key={category}
                    categoryName={category}
                    isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                />
            ))}
        </div>
        </>
    );
};