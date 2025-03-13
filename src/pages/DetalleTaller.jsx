import React from "react";
import { useParams } from "react-router-dom";

const talleres = [
  { id: 1, nombre: "Tejido Básico", descripcion: "Aprende los puntos básicos de tricot para crear las prendas mas hermosas y practicas para vos y tu familia. Clases se dan 1 vez por semana con materiales incluidos en nuestra sucursal." },
  { id: 2, nombre: "Crochet Avanzado", descripcion: "Técnicas avanzadas de crochet: tapestry, amigurumi, Intarsia, Corner to Corner, entre otros. No te lo pierdas, las clases se dan 2 veces por semana con materiales incluidos en nuestra sucursal." },
  { id: 3, nombre: "Macramé Creativo", descripcion: "Crea hermosos diseños en macramé : Tapices, porta-macetas y hasta las prendas y accesorios mas lindos que te podes imaginar. Veni a nuestra sucursal y aprende 2 veces por semana, materiales incluidos." },
];

const DetalleTaller = () => {
  const { id } = useParams();
  const taller = talleres.find((t) => t.id === parseInt(id));

  if (!taller) {
    return <h2>Taller no encontrado</h2>;
  }

  return (
    <div>
      <h2>{taller.nombre}</h2>
      <p>{taller.descripcion}</p>
      <p>Sucursal: Alberti 1963 </p>
      <p>Los esperamos en la Tejeduría!</p>
    </div>
  );
};

export default DetalleTaller;
