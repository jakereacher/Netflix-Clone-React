import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroButton = ({ textColor, bgColor, hover, Icon, name, id }) => {
  const navigate = useNavigate()

  const handleButton = () => {
    if(name === "Play") {
      navigate(`/player/${id}`)
    }
  }
  return (
    <button onClick={handleButton}
      className={`inline-flex items-center gap-2 py-2 px-6 ${bgColor} ${textColor} ${hover} rounded-sm font-medium`}
    >
      <Icon className="text-2xl" />
      {name}
    </button>
  );
};

export default HeroButton;
