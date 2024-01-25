import React, { useState } from 'react';
import IconHeart from './IconHeart';


function Boton({ photo }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='position-relative'>
      <button className='btn position-absolute top-0 end-0"' onClick={handleLikeClick}>
        <IconHeart filled={isLiked} />
      </button>
      <img src={photo.src.medium} alt={photo.photographer} />
      <p>Photographer: {photo.photographer}</p>
    </div>
  );
}

export default Boton;