import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import RestaurantData from '../components/RestaurantData';
import '../styles/RestaurantList.css';

const RestaurantList = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}/food-items`);
  };

  return (
    <div className='restaurant-container'>
      <h1>Restaurants</h1>
      <div className="restaurant-list">
        {RestaurantData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleRestaurantClick(restaurant.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

