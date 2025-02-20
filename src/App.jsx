import { useState } from 'react'
import './App.css'
import Navbar from "./navbar/Navbar"; 
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <ItemListContainer greeting="¡Bienvenido a La Tejeduría! Tu espacio de inspiración y creatividad en el mundo del tejido. Aquí encontrarás una cuidada selección de hilados y lanas de alta calidad, además de talleres diseñados para que aprendas, experimentes y disfrutes del arte de tejer.
¡Explora, crea y teje con nosotros!  " />
    </div>
  );
};

export default App;


