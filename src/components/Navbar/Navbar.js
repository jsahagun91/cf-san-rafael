import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapPin, FaSms } from 'react-icons/fa'; // Importing phone, email, and map pin icons
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt='RT Logo'></img>
        <Link to="/"></Link>
      </div>
      <div className="contact-icons">
        {/* <Link to="tel:+17073602683" className="nav-icon"><FaPhone /></Link>
        <Link to="sms:+17073602683" className="nav-icon"><FaSms /></Link> */}
        <Link to="mailto:norcalshockwaves@gmail.com" className="nav-icon"><FaEnvelope /></Link>
        {/* <Link to="/location" className="nav-icon"><FaMapPin /></Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
