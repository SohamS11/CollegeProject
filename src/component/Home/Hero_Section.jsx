import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import navigation from "../../assets/images/navigation.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();

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
            Join MYCollege to unlock Your future opportunity
            <br />
            and scholarships from top Colleges.
          </p>
          <button
            className={`${
              darkMode
                ? "text-white"
                : "text-black bg-gradient-to-r from-blue-500 to-gray-200"
            }
              relative bg-black  px-6 py-3 rounded-lg hover:bg-gray-500 font-semibold transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden
              `}
            onClick={handleRoute}
          >
            Explore Colleges & Universities
            <span className="absolute top-0 left-0 w-full h-full opacity-25 animate-shine"></span>
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden mt-2 ml-10">
            <img
              src={navigation}
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
