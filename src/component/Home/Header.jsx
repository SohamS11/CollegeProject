import { useState, useEffect } from "react";
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
  const [showBurger, setShowBurger] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleDarkMode, darkMode } = useThemeContext();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    setShowBurger(false);
    setIsMenuOpen(false);
    navigate(route);
  };

  const handleMenuToggle = () => {
    setShowBurger(!showBurger);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode(!isDarkMode);
  };

  const handleCategorySelect = (category) => {
    setIsHovered(false);
    navigate(`/newz/${category}`);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header
      className={`flex justify-center mb-10 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `h-[50px]  ${darkMode ? Color.dark.header : Color.light.header}`
          : `h-[70px]  ${darkMode ? Color.dark.header : Color.light.header}`
      }`}
    >
      <div className="w-full max-w-[1400px]">
        <div className="flex justify-between items-center px-4 md:px-0">
          <div className="flex justify-end w-[200px]">
            <NavLink
              to="/"
              className={`text-2xl font-bold ${
                darkMode ? Color.dark.text : Color.light.text
              }`}
            >
              <h2 className="">MyCollege</h2>
            </NavLink>
          </div>
          {isMobile && isMenuOpen && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
              onClick={handleMenuToggle}
            ></div>
          )}
          {!isMobile && <SearchBox />}
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
          {isMobile && (
            <div
              className={`mx-3 flex justify-center items-center ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <GiHamburgerMenu className="h-5 w-8" onClick={handleMenuToggle} />
            </div>
          )}
          {!isMobile && (
            <nav className="flex items-center">
              <ul
                className={`flex gap-x-4 items-center justify-center ${
                  darkMode ? Color.dark.text : Color.light.text
                }`}
              >
                <li>
                  <button onClick={() => handleNavigation("/")}>Home</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/about")}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/contact")}>
                    Contact
                  </button>
                </li>
                <li>
                  <div
                    className="relative"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`${
                        darkMode ?Color.dark.text :Color.light.text
                      } hover:bg-gray-200 px-3 py-1 rounded-lg`}
                    >
                      News
                    </button>
                    {isHovered && (
                      <div className="absolute top-full w-32 py-2 shadow-lg rounded">
                        <button
                          onClick={() => handleCategorySelect("technology")}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Technology
                        </button>
                        <button
                          onClick={() => handleCategorySelect("sport")}
                          className="block px-4 py-2  hover:bg-gray-100"
                        >
                          Sport
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      {showBurger && (
        <div
          className={`h-screen w-full max-w-[150px] fixed top-0 right-0 ${`mx-0 ${
            darkMode ? "text-white" : "text-black"
          }`} ${
            darkMode ? Color.dark.filterbox : Color.light.filterbox
          } flex flex-col`}
        >
          <GiCrossMark
            onClick={handleMenuToggle}
            className="absolute top-2 right-2"
          />
          <nav className="mt-5 ml-5">
            <ul
              className={`flex flex-col space-y-3 ${
                darkMode ? Color.dark.text : Color.light.text
              }`}
            >
              <li>
                <button onClick={() => handleNavigation("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/about")}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/contact")}>
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/department")}>
                  Department
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className={`mx-3 ${darkMode ? "text-white" : "text-black"}`}
        >
          {darkMode ? <CiLight size={30} /> : <MdDarkMode size={30} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
