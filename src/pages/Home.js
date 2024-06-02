import React from 'react';
import TopRestaurantCard from '../components/TopRestaurantCard';
import Banner from '../components/Banner';
import CuisineCard from '../components/CuisineCard';
import '../styles/Home.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import banner6 from '../assets/banner6.jpg';
import banner7 from '../assets/banner7.jpg';
import banner8 from '../assets/banner8.jpg';
import image24 from '../assets/image24.jpg';
import image25 from '../assets/image25.jpg';
import image26 from '../assets/image26.jpg';
import image27 from '../assets/image27.jpg';
import image28 from '../assets/image28.jpg';
import image29 from '../assets/image29.jpg';
import image30 from '../assets/image30.jpg';
import image31 from '../assets/image31.jpg';
import image32 from '../assets/image32.jpg';
import image33 from '../assets/image33.jpg';
import image34 from '../assets/image34.jpg';
import image35 from '../assets/image35.jpg';
import image36 from '../assets/image36.jpg';
import image37 from '../assets/image37.jpg';
import image38 from '../assets/image38.jpg';
import image39 from '../assets/image39.jpg';
import image40 from '../assets/image40.jpg';
import image41 from '../assets/image41.jpg';
import image42 from '../assets/image42.jpg';
import image43 from '../assets/image43.jpg';
import image44 from '../assets/image44.jpg';
import image45 from '../assets/image45.jpg';
import image46 from '../assets/image46.jpg';
import image47 from '../assets/image47.jpg';
import image48 from '../assets/image48.jpg';
import image49 from '../assets/image49.jpg';
import image50 from '../assets/image50.jpg';
import image51 from '../assets/image51.jpg';
import image52 from '../assets/image52.jpg';
import image53 from '../assets/image53.jpg';

function HomePage() {

    const banners = [
        {
          id: 1,
          image: banner1,
          title: 'Get 20% off on your first order',
          description: 'Use code NOMNOM20 at checkout'
        },
        {
          id: 2,
          image: banner2,
          title: 'Free delivery on orders above ₹500',
          description: 'No code required'
        },
        {
          id: 3,
          image: banner3,
          title: 'Buy one get one free on pizzas',
          description: 'Limited time offer'
        },
        {
          id: 4,
          image: banner4,
          title: 'Save ₹100 on your next order',
          description: 'Minimum order value ₹800'
        },
        {
          id: 5,
          image: banner5,
          title: 'Get 15% off on Chinese cuisine',
          description: 'Use code CHINESE15 at checkout'
        },
        {
          id: 6,
          image: banner6,
          title: 'Free dessert with every order',
          description: 'No code required'
        },
        {
          id: 7,
          image: banner7,
          title: 'Save ₹50 on your first burger order',
          description: 'Use code BURGER50 at checkout'
        },
        {
          id: 8,
          image: banner8,
          title: 'Get 25% off on shawarma orders',
          description: 'Use code SHAWARMA25 at checkout'
        },
      ];

  const popularCuisines = [
    {
      id: 1,
      name: 'Biryani',
      image: image24
    },
    {
      id: 2,
      name: 'Pizza',
      image: image25
    },
    {
      id: 3,
      name: 'Chinese',
      image: image26
    },
    {
      id: 4,
      name: 'Shawarma',
      image: image27
    },
    {
      id: 5,
      name: 'Burger',
      image: image28
    },
    {
      id: 6,
      name: 'Ice Cream',
      image: image29
    },
    {
      id: 7,
      name: 'Tandoori',
      image: image30
    },
    {
      id: 8,
      name: 'Sandwich',
      image: image31
    },
    {
      id: 9,
      name: 'Desserts',
      image: image32
    },
    {
      id: 10,
      name: 'Street Food',
      image: image33
    },
    {
      id: 11,
      name: 'Pasta',
      image: image34
    },
    {
      id: 12,
      name: 'Sushi',
      image: image35
    },
    {
      id: 13,
      name: 'Mexican',
      image: image36
    },
    {
      id: 14,
      name: 'Italian',
      image: image37
    },
    {
      id: 15,
      name: 'Thai',
      image: image38
    },
  ];

  const topRestaurants = [
    {
      id: 1,
      name: 'Paradise Food Court',
      image: image39,
      rating: 4.5,
      description: 'Best biryani in town'
    },
    {
      id: 2,
      name: 'Kinara grand',
      image: image40,
      rating: 4.2,
      description: 'Authentic Hyderabadi cuisine'
    },
    {
      id: 3,
      name: 'Fusion Station',
      image: image41,
      rating: 4.8,
      description: 'Innovative fusion dishes'
    },
    {
      id: 4,
      name: 'Pizza Palace',
      image: image42,
      rating: 4.6,
      description: 'Wood-fired pizzas'
    },
    {
      id: 5,
      name: 'Tandoori House',
      image: image43,
      rating: 4.7,
      description: 'Authentic Indian tandoori dishes'
    },
    {
      id: 6,
      name: 'Sizzling Wok',
      image: image44,
      rating: 4.3,
      description: 'Chinese stir-fries and noodles'
    },
    {
      id: 7,
      name: 'Gourmet Burger Co.',
      image: image45,
      rating: 4.4,
      description: 'Gourmet burgers and sides'
    },
    {
      id: 8,
      name: 'Creamy Dreams',
      image: image46,
      rating: 4.8,
      description: 'Premium ice creams and desserts'
    },
    {
      id: 9,
      name: 'Spice Route',
      image: image47,
      rating: 4.5,
      description: 'Authentic Indian and Middle Eastern cuisine'
    },
    {
      id: 10,
      name: 'Bistro Bliss',
      image: image48,
      rating: 4.6,
      description: 'French-inspired bistro fare'
    },
    {
      id: 11,
      name: 'Sushi Central',
      image: image49,
      rating: 4.7,
      description: 'Fresh sushi and Japanese cuisine'
    },
    {
      id: 12,
      name: 'Taste of Italy',
      image: image50,
      rating: 4.4,
      description: 'Authentic Italian cuisine'
    },
    {
      id: 13,
      name: 'Mexican Fiesta',
      image: image51,
      rating: 4.5,
      description: 'Vibrant Mexican cuisine'
    },
    {
      id: 14,
      name: 'Thai Kitchen',
      image: image52,
      rating: 4.6,
      description: 'Authentic Thai cuisine'
    },
    {
      id: 15,
      name: 'Grill House',
      image: image53,
      rating: 4.7,
      description: 'Premium grilled meats and seafood'
    },
  ];

  return (
    <div className="home-page">
      <div className="banner-container">
        <Banner banners={banners} />
      </div>
      <div className="popular-cuisines-container">
        <h2>Popular Cuisines</h2>
        <div className="popular-cuisines-scroll">
        {popularCuisines.map((cuisine) => (
          <CuisineCard key={cuisine.id} cuisine={cuisine} />
          ))}
        </div>
      </div>
      <div className="top-restaurants-container">
        <h2>Top Restaurants in Hyderabad</h2>
        <div className="top-restaurants-scroll">
        {topRestaurants.map((restaurant) => (
          <TopRestaurantCard key={restaurant.id} restaurant={restaurant} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;