import React from "react";


const AddItemButton = ({ onAdd, quantity }) => {
    return (
        <button
            onClick={() => onAdd(quantity)}
            style={{
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
            }}
        >
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;