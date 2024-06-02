import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import HomePage from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import BookTable from './pages/BookTable';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RestaurantList from './pages/RestaurantList';
import FoodItems from './pages/FoodItems';
import CartProvider from './context/CartContext';
import Cart from './pages/Cart';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (foodItem) => {
    const existingItem = cart.find((item) => item.id === foodItem.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === foodItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...foodItem, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/book-table" element={<BookTable />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/cuisine/:cuisineId/food-items" element={<FoodItems />} />
            <Route path="/restaurant/:restaurantId" element={<RestaurantList />} />
            <Route path="/restaurant-list" element={<RestaurantList />} />
            <Route path="/restaurant/:id/food-items" element={<FoodItems handleAddToCart={handleAddToCart} cart={cart}/>}/>
            <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />}/>
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
