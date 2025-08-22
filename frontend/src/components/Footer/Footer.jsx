import React from 'react'
import './Footer.css'
import { FaUtensils, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <div className="footer-brand">
            <FaUtensils className="brand-icon" /> <span>Foodie</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+12124567890">+1-212-456-7890</a></li>
            <li><a href="mailto:contact@foodie.com">contact@Foodie.com</a></li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Foodie.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
