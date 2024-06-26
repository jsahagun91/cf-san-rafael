import React from 'react';
import './Footer.css'; // Make sure to create a Footer.css file for styling
import { FaInstagram, FaFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-section">
          <h4>About Us</h4>
          <p>C.F. San Rafael</p>
        </section>
        <section className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: cdfsanrafael@gmail.com</p>
          {/* <p>Phone: (707) 360-2683</p> */}
        </section>
        <section className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/cfsanrafael/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://www.facebook.com/people/CF-San-Rafael/61558194561358/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} C.F San Rafael. All rights reserved.</p>
        <p style={{fontSize: '12px', fontFamily: 'Times New Roman', }}>powered by <a style={{ color: 'white', fontFamily: 'Times New Roman'}}href='https://www.pailabs.io'>pai labs</a></p>
      </div>
    </footer>
  );
};

export default Footer;
