import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
          <FaEnvelope /> <a href="mailto:nomnom@gmail.com">nomnom@gmail.com</a>
          </p>
          <p>
          <FaPhone /> <a href="tel:+919814523488">+91 9814523488</a>
          </p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/foodordering" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/foodordering" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/foodordering" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NOM NOM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;