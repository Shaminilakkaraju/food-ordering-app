import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const goToCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/restaurant/:id/food-items">Back to Menu</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total Price: ₹{calculateTotalPrice()}</h3>
      </div>
      <div className="cart-actions">
        {cart.length > 0 && (
          <button onClick={goToCheckout}>Proceed to Checkout</button>
        )} 
        <Link to="/restaurant/:id/food-items"><button>Back to Menu</button></Link>
      </div>
    </div>
  );
};

export default Cart;

