import React from "react";
import Hero_Section from "../component/Hero_Section";
import FeaturesSection from "../component/FeaturesSection";
import Footer from "../Component/Footer";
import TopCities from "../component/TopCities";
import CollegeType from "../Component/CollegeType";

const Home = () => {
  return (
    <>
      <Hero_Section />
      <FeaturesSection />
      <TopCities />
      <CollegeType />
      <Footer />
    </>
  );
};

export default Home;
