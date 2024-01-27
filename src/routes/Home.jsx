import React from "react";
import Hero_Section from "../component/Home/Hero_Section";
import FeaturesSection from "../component/Home/FeaturesSection";
import Footer from "../Component/Home/Footer";
import TopCities from "../component/Home/TopCities";
import Streams from "../Component/Home/Streams";
import TopStreamsCollege from "../Component/Home/TopStreamsCollege";

const Home = () => {
  return (
    <>
      <Hero_Section />
      <FeaturesSection />
      <TopCities />
      <Streams />
      <TopStreamsCollege/>
      <Footer />
    </>
  );
};

export default Home;
