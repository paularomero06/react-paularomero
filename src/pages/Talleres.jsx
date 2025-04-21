import React from "react";
import { Link } from "react-router-dom";

const talleres = [
  { id: 4, nombre: "Tejido Básico",  precio: 30000 },
  { id: 5, nombre: "Crochet Avanzado", precio: 32000 },
  { id: 6, nombre: "Macramé Creativo", precio: 30000 },
];

const Talleres = () => {
  return (
    <div>
      <h1>Catálogo de Talleres</h1>
      <ul>
        {talleres.map((taller) => (
          <li key={taller.id}>
            <Link to={`/talleres/${taller.id}`}>
              {taller.nombre} - ${taller.precio}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Talleres;
