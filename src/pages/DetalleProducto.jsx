import { useParams } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Lana Merino", descripcion: "100% Pura Lana, abrigo inigualable. ", precio: 32000 },
  { id: 2, nombre: "Shetland", descripcion: "Hecha 70% Lana 30% Acrilico.", precio: 33000 },
  { id: 3, nombre: "Cashmilon Semigrueso", descripcion: "100% Acrilico e Hipoalergénico", precio: 22000}
];

function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}

export default DetalleProducto;
