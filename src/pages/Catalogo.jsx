import { Link } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Lana Merino", precio: 32000 },
  { id: 2, nombre: "Shetland", precio: 33000 },
  { id: 3, nombre: "Cashmilon Semigrueso", precio: 22000 }
];

function Catalogo() {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}>
              {producto.nombre} - ${producto.precio}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogo;
