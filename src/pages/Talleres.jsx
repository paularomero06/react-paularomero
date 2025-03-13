import React from "react";
import { Link } from "react-router-dom";

const talleres = [
  { id: 1, nombre: "Tejido Básico",  precio: 30000 },
  { id: 2, nombre: "Crochet Avanzado", precio: 32000 },
  { id: 3, nombre: "Macramé Creativo", precio: 42000 },
];

const Talleres = () => {
  return (
    <div>
      <h2>Catálogo de Talleres</h2>
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
