import React, { useState, useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import IconHeart from './IconHeart';

function Boton({ photo }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(PhotoContext);
  const [isLiked, setIsLiked] = useState(favorites.some((favPhoto) => favPhoto.id === photo.id));

  const handleLikeClick = () => {
    if (isLiked) {

      removeFromFavorites(photo.id);
    } else {

      addToFavorites(photo);
    }
  
    setIsLiked(!isLiked); 
  };

  return (
        

      <div >
      <button className={`btn  ${isLiked ? 'text-danger' : ''}`} onClick={handleLikeClick}>
        <IconHeart filled={isLiked} />
      </button>
      
    
      
        </div>
  );
}

export default Boton;
