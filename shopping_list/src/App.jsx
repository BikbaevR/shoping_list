import {useEffect, useState} from 'react'
import './App.css'
import {AddItem} from "./components/AddItem.jsx";
import {Filters} from "./components/Filters.jsx";
import {ListAll} from "./components/GroupedList.jsx";

export const App = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("shoppingItems")) || [];
        setItems(savedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem("shoppingItems", JSON.stringify(items));
    }, [items]);

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const updateItem = (id, updatedItem) => {
        setItems(items.map(item => item.id === id ? updatedItem : item));
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const togglePurchased = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, purchased: !item.purchased } : item
        ));
    };

    return (
        <div className="app">
            <h1>Список покупок</h1>
            <AddItem onAddItem={addItem} />
            <Filters setFilter={setFilter} />
            <ListAll
                items={items}
                filter={filter}
                onTogglePurchased={togglePurchased}
                onDeleteItem={deleteItem}
                onUpdateItem={updateItem}
            />
        </div>
    );
}

export default App
