import { useContext, useState } from "react";
import { CartContext } from "../CartComponents/CartContext";
import { collection, addDoc, getFirestore, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/client.js"; 
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        emailConfirm: "",
    });
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email !== formData.emailConfirm) {
            alert("Los emails no coinciden");
            return;
        }

        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, {
            buyer: formData,
            items: cartItems,
            total: totalPrice,
            date: serverTimestamp(),
            status: "generada",
        })
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error) => console.error("Error al generar orden: ", error));
    };

    if (orderId) {
        return (
            <div>
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: {orderId}</p>
                <button onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Resumen del carrito</h2>
            <ul>
                {cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.nombre} - {item.quantity} x ${item.precio} = ${item.quantity * item.precio}
                        </li>
                    );
                })}

            </ul>
            <h3>Total: ${totalPrice}</h3>

            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <input
                    name="name"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    required
                />
                <input
                    name="phone"
                    placeholder="Teléfono"
                    onChange={handleInputChange}
                    required
                />
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    required
                />
                <input
                    name="emailConfirm"
                    placeholder="Confirmar Email"
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Generar Orden</button>
            </form>
        </div>
    );
};

export default Checkout;
