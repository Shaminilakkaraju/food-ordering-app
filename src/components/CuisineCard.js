import React from 'react';
import { useNavigate } from 'react-router-dom';

const CuisineCard = ({ cuisine }) => {
  const navigate = useNavigate();

  const handleCuisineClick = () => {
    navigate(`/cuisine/${cuisine.id}/food-items`);
  };

  return (
    <div className="cuisine-card" onClick={handleCuisineClick}>
      <img src={cuisine.image} alt={cuisine.name} />
      <h3>{cuisine.name}</h3>
    </div>
  );
};

export default CuisineCard;