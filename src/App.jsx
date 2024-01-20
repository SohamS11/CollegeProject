
import './App.css'
import Header from './component/Header';
import Home from './routes/Home';
// import FeaturesSection from './component/FeaturesSection';
// import Hero_Section from './component/Hero_Section';
// import { Routes, Rout} from 'react-router-dom';
// import AboutUs from './routes/AboutUs';
// import ContactUs from './routes/ContactUs';
// import Department from './routes/Department';
// import RoadmapDropdown from './routes/RoadmapDropdown';
// import Hero_Section from './component/Hero_Section';
import { useState } from 'react';


function App() {
   const[active, setActiveRoute] = useState('home')

  return (
    <div>
     <Header />
    </div>  
  )
}

export default App;
