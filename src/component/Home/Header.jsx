import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBurger, setShowBurger] = useState(false); // this is for rednder display comes on mobile 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To track menu bar is open or not

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

  return (
    <header
      className={`flex justify-center mb-10 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-[50px] bg-white shadow-md" : "h-[70px] bg-transparent"
      }`}
    >
      {/* Overlay for Hamburger Menu */}
      {isMobile && isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
          onClick={handleMenuToggle}
        ></div>
      )}

      <div className="w-[1300px] relative">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <NavLink to="/" className="text-black text-2xl font-bold">
              <h2>MyCollege</h2>
            </NavLink>
          </div>

          {/* Search bar */}
          {!isMobile && <SearchBox />}

          {/* Search for mobile application */}
          {isMobile && (
            <div
              className="flex bg-blue-500 mr-5 md:bg-green-500 items-center justify-center px-3 mt-2 border rounded-full cursor-pointer"
              onClick={clickHandler}
            >
              <IoSearchOutline />
              <p> Search </p>
            </div>
          )}

          {/* Hamburger Icon */}
          {isMobile && (
            <div className="flex justify-center items-center">
              <GiHamburgerMenu
                className="h-5 w-8"
                onClick={handleMenuToggle}
              />
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

      {/* Hamburger Menu */}
      {showBurger && (
        <div className="h-screen w-[150px] fixed top-0 right-0 bg-red-600  flex flex-col">
          <GiCrossMark
            onClick={handleMenuToggle}
            className="absolute top-2 right-7"
          />

          <nav className="mt-5 ml-5">
            <ul className="flex flex-col space-y-3">
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
      )}
    </header>
  );
};

export default Header;
