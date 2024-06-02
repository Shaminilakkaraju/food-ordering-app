import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const { cart, total, totalAfterDiscount, coupon, couponApplied, discount } = useContext(CartContext);

  const deliveryCharge = 50;
  const platformFee = 5.00;
  const gstRate = 0.18;
  const subtotal = totalAfterDiscount + deliveryCharge;
  const gstAmount = subtotal * gstRate;
  const totalWithCharges = subtotal + platformFee + gstAmount ;

  return (
    <div className="order-confirmation-container">
      <h3>Order Details</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.quantity} x ₹{item.price.toFixed(2)} = ₹{(item.price * item.quantity).toFixed(2)}
        </div>
      ))}
      <div>
        <p>Item Total: ₹{total.toFixed(2)}</p>
        {couponApplied && (
          <div>
            <p>Item Discount<strong>({coupon})</strong>: -₹{(total * discount).toFixed(2)}</p>
          </div>
        )}
        <p> Discounted  Price : ₹{totalAfterDiscount.toFixed(2)}</p>
      </div>
      <h2>Additional Charges</h2>
      <div>
        <p>Delivery Charges: ₹{deliveryCharge.toFixed(2)}</p>
        <p>Platform Fee: ₹{platformFee.toFixed(2)}</p>
        <p>GST and Restaurant Charges: ₹{gstAmount.toFixed(2)}</p>
      </div>
      <h3>To Pay: ₹{totalWithCharges.toFixed(2)}</h3>
      <h3>Your order has been confirmed. Thank you for Ordering!</h3>
    </div>
  );
};

export default OrderConfirmation;
