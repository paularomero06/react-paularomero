import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import AddItemButton from "../AddItemButton/AddItemButton"; 

// Datos de productos y talleres unificados
const items = [
  { id: 1, tipo: "producto", nombre: "Lana Merino", descripcion: "100% Pura Lana, abrigo inigualable.", precio: 32000 },
  { id: 2, tipo: "producto", nombre: "Shetland", descripcion: "Hecha 70% Lana 30% Acrílico.", precio: 33000 },
  { id: 3, tipo: "producto", nombre: "Cashmilon Semigrueso", descripcion: "100% Acrílico e Hipoalergénico", precio: 22000 },
  { id: 4, tipo: "taller", nombre: "Tejido Básico", descripcion: "Aprende los puntos básicos de tricot para crear las prendas más hermosas y prácticas.", precio: 32000 },
  { id: 5, tipo: "taller", nombre: "Crochet Avanzado", descripcion: "Técnicas avanzadas de crochet: tapestry, amigurumi, Intarsia, etc.", precio: 34000 },
  { id: 6, tipo: "taller", nombre: "Macramé Creativo", descripcion: "Crea hermosos diseños en macramé: Tapices, porta-macetas y más.", precio: 30000 },
];

function DetalleProducto() {
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id)); // Encontramos el producto o taller correspondiente

  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = (cantidad) => {
    console.log(`Agregado al carrito: ${cantidad} unidades de ${item.nombre}`);
  };

  if (!item) {
    return <h2>Item no encontrado</h2>;
  }

  return (
    <div>
      <h1>{item.nombre}</h1>
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio}</p>

      <ItemQuantitySelector 
        stock={10} 
        initial={1} 
        onQuantityChange={(q) => setQuantity(q)} 
      />
      <AddItemButton onAdd={handleAddToCart} quantity={quantity} />
    </div>
  );
}

export default DetalleProducto;
