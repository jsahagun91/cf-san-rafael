import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="https://filesonline.s3.us-east-2.amazonaws.com/cfsanrafael.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <h1>Rose Town Concrete Pumping</h1>
      <p>Pump Concrete Anywhere</p> */}
      {/* <button>Learn More</button> */}
    </div>
  );
};

export default HeroSection;
