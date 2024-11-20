import React from "react";

export const Filters = ({ setFilter }) => {
    const categories = ["Все", "Продукты", "Бытовая химия", "Одежда"];

    return (
        <div className="filters">
            {categories.map(category => (
                <button key={category} onClick={() => setFilter(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

