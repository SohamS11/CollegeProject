import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // this is for visibility of search bar or not

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 70) { // You can adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile screen
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickHandler=()=>{
    navigate("/search")
  }
  
  return (
    <header className={`flex justify-center mb-10 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-[50px] bg-white shadow-md' : 'h-[70px] bg-transparent'}`}>
      <div className="w-[1300px]">
        <div className="flex justify-between mb-3">

          <div className="flex items-center">
            <NavLink to="/" className="text-black text-2xl font-bold">
              <h2>MyCollege</h2>
            </NavLink>
          </div>


          {/* Search bar */}
          {!isMobile && (
            <div>
              <SearchBox />
            </div>
          )}


          {/* Search for mobile application */}
          {isMobile && (
            <div className="flex bg-blue-500 mr-5 md:bg-green-500 items-center justify-center px-3 mt-2 border rounded-full cursor-pointer"
            onClick={clickHandler}>
                <IoSearchOutline /> 
                <p> Search </p>
            </div>
          )}
          {/* Navbar div */}
          {!isMobile && (
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
