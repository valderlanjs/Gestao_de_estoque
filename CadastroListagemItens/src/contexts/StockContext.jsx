import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const StockContext = createContext();

StockContextProvider.propTypes = {
    children: PropTypes.node
}

// Item
// { name, description, quantity, price} category, createdAt, updatedAt

export function StockContextProvider({ children }) {
   
    const [items, setItems] = useState(() =>{
        const storedItems = localStorage.getItem("vjs-react-stock")
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items
    })

    const addItem = (item) => {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem("vjs-react-stock", JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return items.find(item => item.id === +itemId)
    }

    const deleteItem = (itemId) => {
        setItems(currentState => {
            const updatedItems = currentState.filter(item => item.id !== itemId)
            localStorage.setItem("vjs-react-stock", JSON.stringify(updatedItems))
            return updatedItems
        
        })
    }

    const updateItem = (itemId, newAttributes) => {
        setItems(currentState => {
            const itemIndex = currentState.findIndex(item => item.id === +itemId)
            const updatedItems = [...currentState]
            Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
            localStorage.setItem("vjs-react-stock", JSON.stringify(updatedItems))
            return updatedItems
        })
    };



    const stock = {
    items,
    addItem,
    deleteItem,
    getItem,
    updateItem
    }
   
    return (
        <StockContext.Provider value={{stock}}>
            {children}
        </StockContext.Provider>
    )
}