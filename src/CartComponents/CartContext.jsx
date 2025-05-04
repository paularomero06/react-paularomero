import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        console.log("Item completo:", item); //
        const existingItem = cartItems.find((prod) => prod.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((prod) => prod.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.precio,
        0
    );

    return (
        <CartContext.Provider
            value={{ cartItems, addItem, removeItem, clearCart, totalQuantity, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};
