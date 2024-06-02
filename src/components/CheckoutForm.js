import React, { useState } from 'react';

const CheckoutForm = ({ cartItems, totalAmount, placeOrder }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'credit-card' &&!validateCreditCard()) {
      alert('Please enter valid credit card details');
      return;
    }
    placeOrder({ name, address, city, state, zip, paymentMethod });
  };

  const validateCreditCard = () => {

    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    if (cleanedCardNumber.length < 12 || cleanedCardNumber.length > 19) {
      return false;
    }

    let nCheck = 0;
    let bEven = false;
    const value = cleanedCardNumber.length;

    for (let n = value - 1; n >= 0; n--) {
      const cDigit = parseInt(cleanedCardNumber.charAt(n), 10);
      let nDigit = bEven? cDigit * 2 : cDigit;

      if (nDigit > 9) {
        nDigit -= 9;
      }

      nCheck += nDigit;
      bEven =!bEven;
    }

    return nCheck % 10 === 0;
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {paymentMethod === 'credit-card' && (
          <div>
            <label>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            <label>Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        )}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Total Items: {cartItems.length}</p>
          <p>Total Amount: ₹{totalAmount}</p>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;