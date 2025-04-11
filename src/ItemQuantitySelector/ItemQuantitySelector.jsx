import React, { useState } from "react";
import { Button } from "@mui/material";

const ItemQuantitySelector = ({ stock = 10, initial = 1, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initial);

    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            onQuantityChange(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", margin: "20px 0" }}>
            <Button variant="outlined" onClick={decrease}>-</Button>
            <span style={{ fontSize: "1.2rem" }}>{quantity}</span>
            <Button variant="outlined" onClick={increase}>+</Button>
        </div>
    );
};

export default ItemQuantitySelector;