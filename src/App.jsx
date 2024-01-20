import "./App.css";
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

export default App;
