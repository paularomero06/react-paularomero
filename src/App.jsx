import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Catalogo from "./pages/Catalogo";
import DetalleProducto from "./pages/DetalleProducto";
import "./App.css";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Talleres from './pages/Talleres';
import Carrito from './pages/Carrito';
import CheckOut from './CartComponents/CheckOut';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenido a La Tejeduría! Tu espacio de inspiración y creatividad en el mundo del tejido. Aquí encontrarás una cuidada selección de hilados y lanas de alta calidad, además de talleres diseñados para que aprendas, experimentes y disfrutes del arte de tejer. ¡Explora, crea y teje con nosotros!" />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/talleres/:id" element={<DetalleProducto />} /> 
        <Route path="/checkout" element={<CheckOut />} />

      </Routes>
    </>
  );
}

export default App;
