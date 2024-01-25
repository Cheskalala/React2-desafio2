import React, { useContext } from 'react';
import Boton from './Boton';
import { PhotoContext } from '../context/PhotoContext';

function Gallery() {
  const { favorites, photos } = useContext(PhotoContext);

  const isPhotoLiked = (photo) => favorites.some((favPhoto) => favPhoto.id === photo.id);

  const renderPhotos = () => {
    return photos.map((photo) => (
      <div key={photo.id} className="photo-card col-md-4 mb-3">
        <div className="position-absolute">
          <Boton photo={photo} isLiked={isPhotoLiked(photo)} />
        </div>
        <img src={photo.src.medium} alt={photo.photographer} className="img-fluid" />
        <p>Photographer: {photo.photographer}</p>
      </div>
    ));
  };

  return (
    <div className="mt-5">
      <h1>Fotos de gatos</h1>
      <div className="photo-gallery container mt-5">
        <div className="row">
          {renderPhotos()}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
