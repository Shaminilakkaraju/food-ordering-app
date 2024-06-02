import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RestaurantCard = ({ restaurant, onClick }) => {
  const renderRatingStars = () => {
    const stars = [];
    const fullStars = Math.floor(restaurant.rating);
    const hasHalfStar = restaurant.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half-star" />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty-star" />);
    }

    return stars;
  };

  return (
    <div className="restaurant-card" onClick={() => onClick(restaurant.id)}>
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <h4>{restaurant.cuisine}</h4>
      <p>{restaurant.description}</p>
      <div className="restaurant-rating">
        <div className="stars">{renderRatingStars()}</div>
        {restaurant.rating} 
      </div>
    </div>
  );
};

export default RestaurantCard;

