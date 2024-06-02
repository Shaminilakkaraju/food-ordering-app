import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard'; 
import FoodData from '../components/FoodData'; 
import { CartContext } from '../context/CartContext';
import '../styles/FoodItems.css';

const FoodItems = ({ restaurantName }) => {
  const { cart, handleAddToCart, handleRemoveFromCart } = useContext(CartContext);

  return (
    <div className="food-items-container">
      <h1>
        <i className="fas fa-book"></i> {restaurantName} Menu
      </h1>
      <button><Link to="/cart">Go to Cart</Link></button>
      <div className="food-items">
        {FoodData.map((foodItem) => (
          <FoodCard
            key={foodItem.id}
            foodItem={foodItem}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            isInCart={cart.some((item) => item.id === foodItem.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
