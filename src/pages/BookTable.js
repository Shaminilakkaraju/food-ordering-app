import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri'; 
import '../styles/BookTable.css'; 

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    restaurant: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateFormData(formData);
    if (Object.keys(newErrors).length === 0) {
      console.log('Table booked:', formData);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
        restaurant: '',
        specialRequests: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.date) {
      errors.date = 'Date is required';
    }
    if (!data.time) {
      errors.time = 'Time is required';
    }
    if (data.guests < 1) {
      errors.guests = 'At least 1 guest is required';
    }
    if (!data.restaurant) {
      errors.restaurant = 'Please select a restaurant';
    }
    return errors;
  };

  return (
    <div className="book-table-page">
      <h2>Book a Table</h2>
      <p>Book a table at one of our partner restaurants and enjoy a delicious meal with friends and family.</p>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className="error"><RiErrorWarningLine /> {errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className="error"><RiErrorWarningLine /> {errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          {errors.date && <span className="error"><RiErrorWarningLine /> {errors.date}</span>}
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          {errors.time && <span className="error"><RiErrorWarningLine /> {errors.time}</span>}
        </div>

        <div className="form-group">
          <label>Guests:</label>
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
          {errors.guests && <span className="error"><RiErrorWarningLine /> {errors.guests}</span>}
        </div>

        <div className="form-group">
          <label>Restaurant:</label>
          <select name="restaurant" value={formData.restaurant} onChange={handleChange} required>
          <option value="olive-bistro">Olive Bistro</option>
          <option value="fat-pigeon">Fat Pigeon</option>
          <option value="prost-brewpub">Prost</option>
          <option value="farzi-cafe">Farzi Cafe</option>
          <option value="little-italy">Little Italy</option>
          <option value="urban-asia">Urban Asia</option>
          <option value="flechazo">Flechazo</option>
          <option value="barbeque-nation">Barbeque Nation</option>
          <option value="fusion-9">Fusion 9</option>
          <option value="soda-bottle-opener-wala">SodaBottleOpenerWala</option>
          <option value="autumn-leaf-cafe">Autumn Leaf Cafe</option>
          <option value="roastery-coffee-house">Roastery Coffee House</option>
          <option value="serafina">Serafina</option>
          <option value="kangan">Kangan</option>
          <option value="tatva">Tatva</option>
          <option value="concu">Conçu</option>
          <option value="dinehill">Dine Hill</option>
          <option value="tre-forni">Tre-Forni</option>
          <option value="kanak">Kanak</option>
          <option value="cafe-g">Cafe G</option>
          <option value="zega">Zega</option>
          <option value="calm-leaf">Calm Leaf</option>
          </select>
          {errors.restaurant && <span className="error"><RiErrorWarningLine /> {errors.restaurant}</span>}
        </div>

        <div className="form-group">
          <label>Special Requests:</label>
          <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
        </div>

        <button type="submit" className='book-button'>Book Table</button>
      </form>
      <p>By booking a table, you agree to our <a href="/BookTable">terms and conditions</a>.</p>
    </div>
  );
};

export default BookTable;
