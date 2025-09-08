import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaDiv = ({ img, name, id }) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/player/${id}`)} className='flex-shrink-0 relative flex-col items-center p-0 cursor-pointer'>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt={name} className='h-44 object-cover rounded-sm' />
    <div>  <h1 className='absolute bottom-1 lef-0 mt-2 text-md font-medium bg-black/30 pl-2'>{name}</h1></div>
    </div>
  );
};

export default MediaDiv;
