import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";
<<<<<<< HEAD
import "./Header.css"; // Import your CSS file for additional styles
=======
import { IoSearchOutline } from "react-icons/io5";
>>>>>>> e60fd0c09d76668e16ff98cd39faa53e0cf742ac

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // this is for visibility of search bar or not

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 70) {
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

<<<<<<< HEAD
  const isRoute = (route) => {
    return location.pathname === route;
  };

  const activeNavLinkStyle = {
    fontWeight: "bold",
    borderBottom: "2px solid blue",
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <NavLink to="/" className="logo-link flex font-bold">
            <img src="./src/assets/images/logoHeader.png" alt="MyCollege Logo" />
            <h2>MyCollege</h2>
          </NavLink>
=======
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
>>>>>>> e60fd0c09d76668e16ff98cd39faa53e0cf742ac
        </div>
        <div className="search-box">
          <SearchBox />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                style={isRoute('/') ? activeNavLinkStyle : {}}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                style={isRoute('/about') ? activeNavLinkStyle : {}}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                style={isRoute('/contact') ? activeNavLinkStyle : {}}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                activeClassName="active"
                style={isRoute('/register') ? activeNavLinkStyle : {}}
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
