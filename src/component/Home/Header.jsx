// src/components/Header.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <header className=" flex justify-center items-center py-2 " > 
      <div className="w-[1300px]" > 
        <div className="flex"  >
 
          <div className="flex items-center">
          <NavLink to="/" className="text-black text-2xl font-bold">
             <h2>MyCollege</h2>
          </NavLink>

           
          </div>

          {/*search box component call kelay   */}

          <SearchBox />

          
            <nav className="flex items-center">
              <ul className=" flex gap-x-4 items-center justify-center ">
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
