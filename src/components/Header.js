import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faUtensils} /> NOM NOM
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
      </div>
      <nav className={navOpen ? 'nav-open' : ''}>
        <Link to="/" onClick={closeNav}>Home</Link>
        <Link to="/about-us" onClick={closeNav}>About us</Link>
        <Link to="/restaurant-list" onClick={closeNav}>Restaurants</Link>
        <Link to="/book-table" onClick={closeNav}>Book Table</Link>
        <Link to="/cart" onClick={closeNav}>
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </Link>
      </nav>
      <div className="search-bar">
        <input type="search" placeholder="Search for restaurants, food, cuisines..." />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="login-button">
        <Link to="/login">
          <button>
            <FontAwesomeIcon icon={faUser} /> Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
