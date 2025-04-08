import React, { useState } from "react";
import './Categories.css'
import CategoryBtn from './CategoryBtn/CategoryBtn';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState("Все"); {/* Хук состояния для активной категории */}
    const categories = ["Все", "Кофе", "Чай", "Газ. напитки", "Коктейли", "Алкоголь"];
    return(
        <>
        <div className="menu-categories">
            {/* перебор всех категорий и отображение каждой в кнопку */}
            {categories.map((category) => (
                <CategoryBtn 
                    // категория = ключ
                    key={category}
                    // пропс названия категории
                    categoryName={category}
                    isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                />
            ))}
        </div>
        </>
    );
};