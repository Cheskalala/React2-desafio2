import { API_KEY } from '../../config';
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Boton from './Boton';




function Gallery() {
  const { favoritePhotos, setFavoritePhotos } = useAppContext();
  const [catPhotos, setCatPhotos] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const fetchCatPhotos = async () => {
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
        setCatPhotos(data.photos);
      } catch (error) {
        console.error('Error al obtener fotos de gatos:', error);
      }
    };

    fetchCatPhotos();
  }, []);

  const handleLikeClick = (photo) => {
    if (!favoritePhotos.some((favPhoto) => favPhoto.id === photo.id)) {
      setFavoritePhotos([...favoritePhotos, photo]);
    }
  };

  const handleShowFavoritesClick = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div>
      <h1>Fotos de gatos</h1>
      <button onClick={handleShowFavoritesClick}>
        {showFavorites ? 'Mostrar Todas' : 'Mostrar Favoritas'}
      </button>
      <div className="photo-gallery">
        {showFavorites
          ? favoritePhotos.map((photo) => (
              <Boton key={photo.id} photo={photo} onLikeClick={handleLikeClick} isLiked={true} />
            ))
          : catPhotos.map((photo) => (
              <Boton key={photo.id} photo={photo} onLikeClick={handleLikeClick} isLiked={favoritePhotos.some((favPhoto) => favPhoto.id === photo.id)} />
            ))}
      </div>
    </div>
  );
}

export default Gallery;