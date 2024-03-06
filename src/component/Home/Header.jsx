import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const [isMobile, setIsMobile] = useState(false);

  const clickHandler = () => {
    navigate("/search");
  };

  return (
    <div className="dark:bg-gray-800">
    <header className="absolute top-2 left-0 right-0 z-50 flex justify-center dark:bg-gray-800">
      <div className="w-[1300px]">
        <div className="flex justify-between mb-3 text-black">
          <div className="flex items-center text-black">
            <NavLink to="/" className="text-2xl font-bold">
              <h2>MyCollege</h2>
            </NavLink>
          </div>
          {!isMobile && (
            <div>
              <SearchBox />
            </div>
          )}
          {isMobile && (
            <div className="flex bg-blue-500 mr-5 md:bg-green-500 items-center justify-center px-3 mt-2 border rounded-full cursor-pointer" onClick={clickHandler}>
              <IoSearchOutline />
              <p> Search </p>
            </div>
          )}
          {!isMobile && (
            <nav className="flex items-center">
              <ul className="flex gap-x-4 items-center justify-center">
                <li>
                  <button onClick={() => handleNavigation("/")} className="hover:text-gray-300">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/about")} className="hover:text-gray-300">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/contact")} className="hover:text-gray-300">
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/department")} className="hover:text-gray-300">
                    Department
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
