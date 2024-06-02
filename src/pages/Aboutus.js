import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Aboutus.css'

const Aboutus = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to NOM NOM, your ultimate destination for delicious food from top restaurants!</p>
      </div>

      <section className="our-story">
        <h3>Our Story</h3>
        <p>At NOM NOM, we believe that good food brings people together. Our journey began with a simple idea: to make it easy for everyone to enjoy their favorite dishes from the comfort of their own homes. Since our inception, we've been on a mission to connect food lovers with the best restaurants in town.</p>
      </section>

      <section className="our-mission">
        <h3>Our Mission</h3>
        <p>Our mission is to provide a seamless and enjoyable food ordering experience for our customers. We're committed to offering a wide variety of cuisines, convenient delivery options, and exceptional customer service. Whether you're craving pizza, sushi, or something sweet, we've got you covered!</p>
      </section>

      <section className="our-values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Quality:</strong> We partner with top-rated restaurants to ensure that every meal meets the highest standards of quality and taste.</li>
          <li><strong>Convenience:</strong> Ordering food should be easy. That's why we've designed our platform to be user-friendly and efficient, so you can enjoy your favorite meals with just a few clicks.</li>
          <li><strong>Community:</strong> Food has the power to bring people together and create shared experiences. We're proud to serve our local community and support small businesses.</li>
        </ul>
      </section>

      <section className="our-services">
        <h3>Our Services</h3>
        <p>At NOM NOM, we offer a range of services to enhance your food ordering experience:</p>
        <ul>
          <li><strong>Online Ordering:</strong> Browse menus, place orders, and track deliveries online or through our mobile app.</li>
          <li><strong>Delivery & Pickup:</strong> Choose between delivery to your doorstep or convenient pickup options.</li>
          <li><strong>Customer Support:</strong> Our dedicated customer support team is available to assist you with any questions or concerns.</li>
        </ul>
      </section>

      <section className="join-us">
        <h3>Join Us</h3>
        <p>Ready to explore the world of delicious food with NOM NOM? Join our community today and start enjoying your favorite dishes from the best restaurants in town!</p>
        <Link to="/signup">
          <button>Sign Up Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Aboutus;
