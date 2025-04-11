import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import AddItemButton from "../AddItemButton/AddItemButton"; // Importa el componente AddItemButton

const talleres = [
  { id: 1, nombre: "Tejido Básico", descripcion: "Aprende los puntos básicos de tricot para crear las prendas más hermosas y prácticas para vos y tu familia. Clases se dan 1 vez por semana con materiales incluidos en nuestra sucursal", precio: "32000" },
  { id: 2, nombre: "Crochet Avanzado", descripcion: "Técnicas avanzadas de crochet: tapestry, amigurumi, Intarsia, Corner to Corner, entre otros. No te lo pierdas, las clases se dan 2 veces por semana con materiales incluidos en nuestra sucursal.", precio: "34000" },
  { id: 3, nombre: "Macramé Creativo", descripcion: "Crea hermosos diseños en macramé: Tapices, porta-macetas y hasta las prendas y accesorios más lindos que te puedes imaginar. Vení a nuestra sucursal y aprende 2 veces por semana, materiales incluidos.", precio: "30000" },
];

const DetalleTaller = () => {
  const { id } = useParams();
  const taller = talleres.find((t) => t.id === parseInt(id));

  const [quantity, setQuantity] = useState(1); // Estado para cantidad seleccionada

  // Función para agregar al carrito
  const handleAddToCart = (cantidad) => {
    console.log(`Agregado al carrito: ${cantidad} clases de ${taller.nombre}`);
    // Aquí puedes agregar el taller al carrito o hacer alguna acción adicional
  };

  if (!taller) {
    return <h2>Taller no encontrado</h2>;
  }

  return (
    <div>
      <h2>{taller.nombre}</h2>
      <p>{taller.descripcion}</p>
      <p>Precio: ${taller.precio}</p>
      <p>Sucursal: Alberti 1963</p>
      <p>¡Los esperamos en la Tejeduría!</p>

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
};

export default DetalleTaller;
