import React from "react";
import HeroSection from "../component/Home/Hero_Section";
import FeaturesSection from "../component/Home/FeaturesSection";
import Footer from "../Component/Home/Footer";
import TopCities from "../component/Home/TopCities";
import Streams from "../Component/Home/Streams";
import TopStreamsCollege from "../Component/Home/TopStreamsCollege";
import SelectCourse from "../Component/Home/SelectCourse";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <HeroSection />
      <FeaturesSection />
      <TopCities />
      <Streams />
      <SelectCourse />
      <TopStreamsCollege />
      <Footer />
    </div>
  );
};

export default Home;
