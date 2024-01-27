import React from "react";
import Hero_Section from "../component/Hero_Section";
import FeaturesSection from "../component/FeaturesSection";
import TopCities from "../component/TopCities";
import Footer from "../routes/Footer"
const Home = () => {
  return (
    <>
      <Hero_Section />
      <FeaturesSection />
      <Footer/>
      <TopCities/>
    </>
  );
};

export default Home;
