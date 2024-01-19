// src/components/Header.jsx
import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  
  const marginTopValue = '0px';
  return (
    <header className="text-black relative h-[480px] bg-cover bg-center p-4" style={{ backgroundImage: 'url("./src/images/collegeBackground.jpg")', marginTop: marginTopValue}}>
      <div className="p-4 container mx-auto  flex items-center justify-between  max-w-[1280px]">
        <div className="flex items-center mx-auto">
          
          <div className="font-bold text-xl">My College</div>
        </div>
        <div className="flex items-center ml-40">
            <input
              type="text"
              placeholder="Search for colleges"
              className= "px-24 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
            />
            
          </div>
          <div className="text-black text-center mx-auto">
        <nav className="space-x-8 mx-auto flex items-center justify-between p-4">

        <ul className="flex space-x-4">
        
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/department">Departments</Link>
          </li>
        </ul>
          
        </nav>
        </div>
        
        </div>
        <div className="flex items-center justify-start h-full mt-10 pb-10 ml-36">
        <div className="text-white text-left p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My College</h1>
          <p className="text-lg mb-8">Discover a world of knowledge and opportunities.</p>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-700">Apply Now</button>
        </div>
      </div>
        
    </header>
  );
};

export default Header;
