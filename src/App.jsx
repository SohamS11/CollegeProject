import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Department from "./routes/Department";
import RoadmapDropdown from "./routes/RoadmapDropdown";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/department" element={<Department />} />
        <Route path="/allroadmap/*" element={<RoadmapDropdown />} />
        <Route path="*" element={<h1>not found bro </h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
