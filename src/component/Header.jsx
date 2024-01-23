// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "../Container/SearchBox";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <header className="text-black shadow-md">
      <div className="shadow-md pb-5">
        <div className="container mx-auto flex items-center justify-between max-w-[1180px] ml-60">
          <div className="flex items-center">
            <div className="font-bold text-xl">MyCollege</div>
          </div>
          <SearchBox />
          <div className="text-black text-center mx-auto">
            <nav className="space-x-4">
              <ul className="flex space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
