import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("creditCard");

  const applyCoupon = (code) => {
    if (couponApplied) {
      alert("Coupon already applied!");
      return;
    }

    const coupons = [
      { code: "FLAT10", discount: 0.1, description: "10% Off Your Order" },
      { code: "SAVE15", discount: 0.15, description: "15% Off Your Order" },
      { code: "BUMPER20", discount: 0.2, description: "20% Off Your Order" },
      { code: "FIRSTORDER", discount: 0.15, description: "15% Off Your First Order" },
      { code: "WEEKENDTREAT", discount: 0.2, description: "20% Off Fri-Sun Orders" },
    ];
    
    

    const matchedCoupon = coupons.find(coupon => coupon.code === code);

    if (matchedCoupon) {
      setDiscount(matchedCoupon.discount);
      setCoupon(matchedCoupon.code);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code!");
    }
  };

  const removeCoupon = () => {
    setDiscount(0);
    setCoupon("");
    setCouponApplied(false);
  };

  const handleAddToCart = (foodItem) => {
    const existingItemIndex = cart.findIndex(item => item.id === foodItem.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { ...foodItem, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const total = calculateTotal();
  const totalAfterDiscount = total - (total * discount);

  return (
    <CartContext.Provider value={{
      cart,
      total,
      totalAfterDiscount,
      applyCoupon,
      removeCoupon,
      coupon,
      discount,
      couponApplied,
      selectedPaymentMethod, 
      setSelectedPaymentMethod, 
      handleAddToCart,
      handleRemoveFromCart,
      handleIncreaseQuantity,
      handleDecreaseQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
