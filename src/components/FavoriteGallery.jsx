import React from 'react';

function FavoriteGallery({ favoritePhotos }) {
  return (
    <div>
      <h2>Fotos Favoritas</h2>
      <div className="favorite-gallery">
        {favoritePhotos && favoritePhotos.length > 0 ? (
          favoritePhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.src.medium} alt={photo.photographer} />
              <p>Photographer: {photo.photographer}</p>
            </div>
          ))
        ) : (
          <p>No hay fotos favoritas.</p>
        )}
      </div>
    </div>
  );
}

export default FavoriteGallery;