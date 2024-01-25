import React from 'react';

import { ProvideAppContext } from '../context/AppContext'; // Importa el proveedor de contexto
import FavoriteGallery from '../components/FavoriteGallery'; // Cambia el nombre aquí

const Favorites = () => {
  return (
    <ProvideAppContext> 
      <div className="App">
        <h1>Natural Pic</h1>
        <FavoriteGallery /> {/* Cambia el nombre aquí */}
      </div>
    </ProvideAppContext>
  );
};

export default Favorites;