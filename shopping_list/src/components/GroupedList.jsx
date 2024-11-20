import React from "react";
import {ItemList} from "./ItemList.jsx";


export const ListAll = ({ items, filter, onTogglePurchased, onDeleteItem, onUpdateItem }) => {
    const filteredItems = items.filter(item =>
        filter === "Все" || item.category === filter
    );

    const purchased = filteredItems.filter(item => item.purchased);
    const notPurchased = filteredItems.filter(item => !item.purchased);

    return (
        <div className="grouped-list">
            <p>Не куплено</p>
            <ItemList
                items={notPurchased}
                onTogglePurchased={onTogglePurchased}
                onDeleteItem={onDeleteItem}
                onUpdateItem={onUpdateItem}
            />
            <p>Куплено</p>
            <ItemList
                items={purchased}
                onTogglePurchased={onTogglePurchased}
                onDeleteItem={onDeleteItem}
                onUpdateItem={onUpdateItem}
            />
        </div>
    );
};

