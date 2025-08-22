import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

// Icons
import { FaHome, FaUtensils, FaMobileAlt, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 👈 mobile menu toggle

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Brand */}
      <Link to="/" className="navbar-brand">
        <h2>
          <FaUtensils className="brand-icon" /> Foodie
        </h2>
      </Link> 

      {/* Hamburger Icon for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => {setMenu("home"); setIsOpen(false)}} className={`${menu === "home" ? "active" : ""}`}>
          <FaHome className="nav-icon" /> home
        </Link>
        <a href='#explore-menu' onClick={() => {setMenu("menu"); setIsOpen(false)}} className={`${menu === "menu" ? "active" : ""}`}>
          <FaUtensils className="nav-icon" /> menu
        </a>
        <a href='#app-download' onClick={() => {setMenu("mob-app"); setIsOpen(false)}} className={`${menu === "mob-app" ? "active" : ""}`}>
          <FaMobileAlt className="nav-icon" /> mobile app
        </a>
        <a href='#footer' onClick={() => {setMenu("contact"); setIsOpen(false)}} className={`${menu === "contact" ? "active" : ""}`}>
          <FaPhoneAlt className="nav-icon" /> contact us
        </a>
      </ul>

      {/* Right */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
