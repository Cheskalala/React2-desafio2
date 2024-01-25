import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Boton from '../components/Boton';

function Favorites() {
  const { favorites } = useContext(PhotoContext);

  return (
    <div className='text-center mt-5 App'>
      <h1>Fotos Favoritas</h1>
      <div className="favorites-gallery container mt-5">
        <div className='row'>
        {favorites.map((photo) => (
          <div key={photo.id} className="photo-card col-md-4 mb-3 position-relative">
            <Boton photo={photo} isLiked={true} />
            <img src={photo.src.medium} alt={photo.photographer} className='img-fluid' />
            <p>Photographer: {photo.photographer}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;