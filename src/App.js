import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import './App.css'; // If using CSS
// import ServicesSection from './components/ServicesSection/ServicesSection'
import GallerySection from "./components/GallerySection/GallerySection";
import ScheduleSection from "./components/ScheduleSection/ScheduleSection";

function App() {
  return (
    <Router>
      <Navbar />
      <ScheduleSection/>
      <HeroSection />
      {/* <ServicesSection /> */}
      <GallerySection />
      <Footer />
    </Router>
  );
}

export default App;
