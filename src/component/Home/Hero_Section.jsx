import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "../src/assets/images/collegeBackground.jpg",
  "../src/assets/images/collegeBackground2.jpg",
  "../src/assets/images/collegeBackground3.jpg",
  "../src/assets/images/collegeBackground5.jpeg",
]; // Add more image URLs as needed

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  function handleRoute() {
    navigate(`/collegelist/india-colleges`);
  }

  return (
    <div
      className="relative bg-cover bg-center min-h-[400px] lg:min-h-[70vh] mt-[70px] flex justify-center items-center transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white text-center p-8 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Welcome to My College
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Discover a world of knowledge and opportunities.
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleRoute}
        >
          Explore Colleges & Universities
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
