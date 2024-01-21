import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import Department from "./Department";
import RoadmapDropdown from "./RoadmapDropdown";
import CollegeComponent from "../component/CollegeComponent";
import SearchResults from "../component/SearchResults";


const NavigateRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/department" element={<Department />} />
        <Route path="/allroadmap/*" element={<RoadmapDropdown />} />
        <Route path="/college" element={<CollegeComponent />} />
        <Route path="/search/:query" element={<SearchResults/>} />
      </Routes>
    </div>
  );
};

export default NavigateRoute;
