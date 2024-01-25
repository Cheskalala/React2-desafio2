import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_KEY } from '../../config';

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
          try {
            const response = await fetch('https://api.pexels.com/v1/search?query=cats&per_page=10', {
              headers: {
                Authorization: API_KEY,
              },
            });
    
            if (!response.ok) {
              throw new Error('Error al obtener fotos de gatos');
            }
    
            const data = await response.json();
            setPhotos(data.photos);
          } catch (error) {
            console.error('Error al obtener fotos de gatos:', error);
          }
        };
    
        fetchPhotos();
      
  }, []);

  const addToFavorites = (photo) => {
    // Agregar la foto a la lista de favoritos (favorites)
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
  };

  const removeFromFavorites = (photoId) => {
    // Eliminar la foto de la lista de favoritos (favorites)
    setFavorites((prevFavorites) => prevFavorites.filter((photo) => photo.id !== photoId));
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
