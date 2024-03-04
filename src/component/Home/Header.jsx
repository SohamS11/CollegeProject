import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBox from "../../Container/Home/SearchBox";
import "./Header.css"; // Import your CSS file for additional styles

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 70) {
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
