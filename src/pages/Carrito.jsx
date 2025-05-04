import { useContext } from "react";
import { CartContext } from "../CartComponents/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeItem, clearCart, totalPrice } = useContext(CartContext);

    if (cartItems.length === 0)
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );

    return (
        <div>
            <h2>Carrito de compras</h2>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.nombre}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.precio * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
    );
};

export default Cart;
