import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';


const Checkout = () => {
  const { cart, total, applyCoupon, removeCoupon, coupon, discount } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const deliveryCharge = 50; 
  const platformFee = 5.00;
  const gst = 0.18; 

  const handleCouponApply = () => {
    applyCoupon(couponCode);
    setCouponCode(""); 
  };

  const handleCouponRemove = () => {
    removeCoupon();
  };

  const calculateTotalAfterDelivery = () => {
    const totalAfterDiscount = total - (total * discount);
    const subtotal = totalAfterDiscount + deliveryCharge;
    const totalWithFees = subtotal + platformFee + (subtotal * gst) ;
    return totalWithFees;
  };

  return (
    <div className="checkout-container">
      <h2>Order Summary</h2>
      <div className="order-summary">
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "100px", marginRight: "10px" }} />
            {item.name} - {item.quantity} x ₹{item.price.toFixed(2)} {item.discountedPrice && <span>(Discounted: ₹{item.discountedPrice.toFixed(2)})</span>} = ₹{(item.price * item.quantity).toFixed(2)}
          </div>
        ))}
        <h3>Item Total: ₹{total.toFixed(2)}</h3>

        <h3>Promo Code</h3>
        <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter promo code" />
        <button onClick={handleCouponApply}>Apply</button>

        {coupon && (
          <div>
            <h3>Discount ({coupon}): -₹{(total * discount).toFixed(2)}</h3>
            <button onClick={handleCouponRemove}>Remove Coupon</button> </div>
        )}
        <h3>Delivery Charges</h3>
        <p>₹{deliveryCharge.toFixed(2)}</p>
        <h3>Platform Fee</h3>
        <p>₹{platformFee.toFixed(2)}</p>
        <h3>GST and Restaurant Charges</h3>
        <p>₹{(total * gst).toFixed(2)}</p>
        <h3>To Pay: ₹{calculateTotalAfterDelivery().toFixed(2)}</h3>
      </div>
      <div className="delivery-address">
        <h3>Delivery Address</h3>
        <input type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} placeholder="Enter your delivery address" />
      </div>

      <div className="payment-section">
        <h3>Payment Method</h3>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cashOnDelivery">Cash on Delivery</option>
        </select>
      </div>

      <button><Link to="/order-confirmation">Place Your Order</Link></button>

      <button><Link to="/cart">Go Back to Cart</Link></button>
    </div>
  );
};

export default Checkout;
