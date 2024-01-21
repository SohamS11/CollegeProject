import "./App.css";
<<<<<<< HEAD
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
=======
import Header from "./component/Header";
import { useState } from "react";
import NavigateRoute from "./routes/NavigateRoute";
// import FeaturesSection from './component/FeaturesSection';
// import Hero_Section from './component/Hero_Section';
// import { Routes, Rout} from 'react-router-dom';
// import AboutUs from './routes/AboutUs';
// import ContactUs from './routes/ContactUs';
// import Department from './routes/Department';
// import RoadmapDropdown from './routes/RoadmapDropdown';
// import Hero_Section from './component/Hero_Section';

function App() {
  const [active, setActiveRoute] = useState("home");

  return (
    <div>
      <Header />
      <NavigateRoute/>
    </div>
  );
}
>>>>>>> 4f453f09f3ea0cf7aac716f5d936b89c3ff30d26

export default App;
