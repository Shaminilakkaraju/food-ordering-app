import React from 'react';
import { FaStar, FaClock } from 'react-icons/fa';
import '../styles/FoodCard.css';

const FoodCard = ({ foodItem, handleAddToCart, handleRemoveFromCart, isInCart }) => {

  const renderRatingStars = () => {
    const stars = [];
    const fullStars = Math.floor(foodItem.rating);
    const hasHalfStar = foodItem.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half-star" />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty-star" />);
    }

    return stars;
  };

  return (
    <div className="food-card">
      <img src={foodItem.image} alt={foodItem.name} />
      <h3>{foodItem.name}</h3>
      <p>Cuisine: {foodItem.cuisine}</p>
      <p>Price: ₹{foodItem.price}</p>
      <p>
        <FaClock className="prep-time-icon" /> Prep Time: {foodItem.prepTime} minutes
      </p>
      <div className="rating">
        <span>Rating:</span>
        <div className="stars">{renderRatingStars()}</div>
      </div>
      {isInCart ? (
        <button onClick={() => handleRemoveFromCart(foodItem.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => handleAddToCart(foodItem)}>Add to Cart</button>
      )}
    </div>
  );
};

export default FoodCard;
