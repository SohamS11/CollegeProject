import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  function HandleRoute() {
    navigate(`/collegelist/india-colleges`);
  }
  return (
    <div className="relative bg-cover bg-center lg:min-w-[1024px] h-96 mt-[70px] flex justify-center items-center">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../src/assets/images/collegeBackground.jpg")',
        }}
      ></div>
      <div className="text-white text-center p-8 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Welcome to My College
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Discover a world of knowledge and opportunities.
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          onClick={() => HandleRoute()}
        >
          Explore Colleges & Universities
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
