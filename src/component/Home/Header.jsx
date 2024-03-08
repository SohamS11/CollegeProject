import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBurger, setShowBurger] = useState(false); // this is for render display on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To track if menu bar is open or not
  const { toggleDarkMode, darkMode } = useThemeContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 70);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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

  const clickHandler = () => {
    navigate("/search");
  };

  const handleNavigation = (route) => {
    setShowBurger(false); // Close the hamburger menu
    setIsMenuOpen(false); // Close the menu overlay
    navigate(route);
  };

  const handleMenuToggle = () => {
    setShowBurger(!showBurger); // Toggle the hamburger menu
    setIsMenuOpen(!isMenuOpen); // Toggle the menu overlay
  };

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`flex justify-center mb-10 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-[50px] " + Color[isDarkMode ? "dark" : "light"].header
          : "h-[70px] " + Color[isDarkMode ? "dark" : "light"].header
      }`}
    >
      {/* Overlay for Hamburger Menu */}
      <div className="w-full max-w-[1300px] relative">
        <div className="flex justify-between items-center px-4 md:px-0">
          <div className="flex items-center">
            <NavLink
              to="/"
              className={`text-2xl font-bold ${
                Color[isDarkMode ? "dark" : "light"].text
              }`}
            >
              <h2>MyCollege</h2>
            </NavLink>
          </div>
          {/* Overlay for Hamburger Menu */}
          {isMobile && isMenuOpen && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
              onClick={handleMenuToggle}
            ></div>
          )}
          {/* Search bar */}
          {!isMobile && <SearchBox />}

          {/* Search for mobile application */}
          {isMobile && (
            <div
              className={`flex gap-2 p-2${
                darkMode ? "text-white " : "text-black bg-blue-500 "
              } md:bg-green-500 items-center justify-center px-3 mt-2 border rounded-full cursor-pointer`}
              onClick={clickHandler}
            >
              <IoSearchOutline />
              <p className=""> Search </p>
            </div>
          )}

          {/* Hamburger Icon */}
          {isMobile && (
            <div
              className={`mx-3 flex justify-center items-center ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <GiHamburgerMenu className="h-5 w-8" onClick={handleMenuToggle} />
            </div>
          )}

          {/* Navbar div */}
          {!isMobile && (
            <nav className="flex items-center">
              <ul className="flex gap-x-4 items-center justify-center">
                <li>
                  <button
                    onClick={() => handleNavigation("/")}
                    className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/about")}
                    className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/department")}
                    className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                  >
                    Department
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Hamburger Menu */}
      {showBurger && (
        <div
          className={`h-screen w-full max-w-[150px] fixed top-0 right-0 ${`mx-3 ${
            darkMode ? "text-white" : "text-black"
          }`} ${Color[isDarkMode ? "dark" : "light"].filterbox} flex flex-col`}
        >
          <GiCrossMark
            onClick={handleMenuToggle}
            className="absolute top-2 right-7"
          />
          <nav className="mt-5 ml-5">
            <ul className="flex flex-col space-y-3">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/department")}
                  className={`${Color[isDarkMode ? "dark" : "light"].text}`}
                >
                  Department
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="flex items-center">
        <button
          onClick={handleModeToggle}
          className={`mx-3 ${darkMode ? "text-white" : "text-black"}`}
        >
          {isDarkMode ? <CiLight size={30} /> : <MdDarkMode size={30} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
