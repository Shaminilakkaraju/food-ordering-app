import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css'; 

import bannerImage from '../assets/bannerImage.jpg';

function MainPage() {
  return (
    <div className="main-page">
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="signup-button1-container">
          <button className="signup-button1"><Link to="/signup">Join Now</Link></button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
