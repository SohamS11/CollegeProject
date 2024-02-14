import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 70) { // You can adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`flex justify-center bg-white items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-[50px] bg-white shadow-md' : 'h-[70px] bg-transparent'}`}>
      <div className="w-[1300px]">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <NavLink to="/" className="text-black text-2xl font-bold">
              <h2>MyCollege</h2>
            </NavLink>
          </div>
          <div> 
            <SearchBox />
          </div>
          <nav className="flex items-center">
            <ul className="flex gap-x-4 items-center justify-center">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="hover:text-gray-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="hover:text-gray-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-gray-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/department")}
                  className="hover:text-gray-300"
                >
                  Department
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
