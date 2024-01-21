// src/components/Header.jsx
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';



const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handlesearch =()=>{
    if(searchQuery.trim() !== ''){
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleNavigation =(route)=>{
    navigate(route)
  }
  return (
    <header className="text-black">
      <div className='shadow-md pb-5'>
      <div className="container mx-auto  flex items-center justify-between max-w-[1180px] ml-60 mt-5">
        <div className="flex items-center">
          
          <div className="font-bold text-xl">MyCollege</div>
        </div>
        <div className="flex items-center ml-40">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for colleges"
              className= "px-24 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
            />
            <button onClick={handlesearch}>Search</button>
          </div>
          <div className="text-black text-center mx-auto">
        <nav className="space-x-4">

        <ul className="flex space-x-4">
        <li>
            <button onClick={() => handleNavigation('/')} className="hover:text-gray-300">Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/about')} className="hover:text-gray-300">About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/contact')} className="hover:text-gray-300">Contact</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/department')} className="hover:text-gray-300">department</button>
          </li>
        
        </ul>  
        </nav>
        </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
