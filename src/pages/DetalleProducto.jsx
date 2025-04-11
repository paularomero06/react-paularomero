import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import AddItemButton from "../AddItemButton/AddItemButton"; // Importa el componente AddItemButton

const productos = [
  { id: 1, nombre: "Lana Merino", descripcion: "100% Pura Lana, abrigo inigualable.", precio: 32000 },
  { id: 2, nombre: "Shetland", descripcion: "Hecha 70% Lana 30% Acrílico.", precio: 33000 },
  { id: 3, nombre: "Cashmilon Semigrueso", descripcion: "100% Acrílico e Hipoalergénico", precio: 22000 }
];

function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

  // Función para agregar al carrito
  const handleAddToCart = (cantidad) => {
    console.log(`Agregado al carrito: ${cantidad} unidades de ${producto.nombre}`);
    // Aquí puedes agregar el producto al carrito o hacer alguna acción adicional
  };

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>

      {/* Componente para seleccionar cantidad */}
      <ItemQuantitySelector 
        stock={10} 
        initial={1} 
        onQuantityChange={(q) => setQuantity(q)} // Actualiza el estado de la cantidad
      />

      {/* Agregar el botón para agregar al carrito */}
      <AddItemButton onAdd={handleAddToCart} quantity={quantity} />
    </div>
  );
}

export default DetalleProducto;