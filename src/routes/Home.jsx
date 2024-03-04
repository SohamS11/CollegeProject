import React from "react";
import Hero_Section from "../component/Home/Hero_Section";
import FeaturesSection from "../component/Home/FeaturesSection";
import Footer from "../Component/Home/Footer";
import TopCities from "../component/Home/TopCities";
import Streams from "../Component/Home/Streams";
import TopStreamsCollege from "../Component/Home/TopStreamsCollege";
import SelectCourse from "../Component/Home/SelectCourse";
// import Header from "../component/Home/Header";

const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Hero_Section />
      <FeaturesSection />
      <TopCities />
      <Streams />
      <SelectCourse/>
      <TopStreamsCollege/>
      <Footer />
    </>
  );
};

export default Home;
