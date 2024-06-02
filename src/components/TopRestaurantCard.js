import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const TopRestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

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
    <div className="top-restaurant-card" onClick={handleRestaurantClick}>
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="top-restaurants-scroll">
      <div className="top-restaurants-info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <div className="rating">
        <div className="stars">{renderRatingStars()}</div>
          <span>{restaurant.rating}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopRestaurantCard;
