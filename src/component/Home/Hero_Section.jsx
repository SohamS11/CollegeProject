import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMoving, setIsMoving] = useState(true); // Set to true to start animation
  const images = [
    "../src/assets/images/hero-bg.png",
    "../src/assets/images/hero-bg2.png",
    "../src/assets/images/manWomen.png",
    "../src/assets/images/search.png",
    "../src/assets/images/search2.png",
    "../src/assets/images/landingpage.png",
    "../src/assets/images/navigation.png",
    "../src/assets/images/onlinePresentation.png",
  ];
  const { toggleDarkMode, darkMode } = useThemeContext();

  function handleRoute() {
    navigate(`/collegelist/india-colleges`);
  }

  return (
    <div className="relative min-h-[900px] lg:min-h-[90vh] mt-[80px] flex justify-center items-center transition-opacity duration-1000">
      <div className="absolute max-w-[1200px] mx-auto inset-0 flex flex-col lg:flex-row items-center">
       
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center  p-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Meet colleges. <br className="lg:hidden" />
            Get accepted.
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-center lg:text-left">
            Join MYCollege to unlock early admissions offers
            <br />and scholarships from top schools.
          </p>
          <button
            className={
              `${darkMode ? 'text-white': 'text-black bg-blue-300'}
              relative bg-black  px-6 py-3 rounded-lg hover:bg-gray-500 font-semibold transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden
              `
            }
            onClick={handleRoute}
          >
            Explore Colleges & Universities
            <span className="absolute top-0 left-0 w-full h-full opacity-25 animate-shine"></span>
          </button>
        </div>

       
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden mt-2 ml-10">
            <img
              src={images[6]}
              alt="Presentation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
