import React from "react";

export const ItemList = ({ items, onTogglePurchased, onDeleteItem, onUpdateItem }) => {
    return (
        <ul className="item-list">
            {items.map(item => (
                <li key={item.id} className={item.purchased ? "purchased" : ""}>
                    <span>{item.name} ({item.quantity})</span>
                    {item.price && <span> {item.price} </span>}
                    <button onClick={() => onTogglePurchased(item.id)}>
                        {item.purchased ? "Вернуть" : "Купить"}
                    </button>
                    <button onClick={() => onDeleteItem(item.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};
