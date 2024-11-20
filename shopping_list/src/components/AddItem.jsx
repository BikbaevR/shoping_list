import React, { useState } from "react";

export const AddItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Продукты");

    const submit = (e) => {
        e.preventDefault();
        if (!name) return;
        const newItem = {
            id: Date.now(),
            name,
            quantity: Number(quantity),
            price: price ? Number(price) : null,
            category,
            purchased: false,
        };
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setPrice("");
    };

    return (
        <form onSubmit={submit} className="add-item-form">
            <input
                type="text"
                placeholder="Название товара"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                min="1"
                placeholder="Количество"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Цена (опционально)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Продукты">Продукты</option>
                <option value="Бытовая химия">Бытовая химия</option>
                <option value="Одежда">Одежда</option>
            </select>
            <button type="submit">Добавить</button>
        </form>
    );
};
