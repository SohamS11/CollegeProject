import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import FetchNewz from "./FetchNewz";

const Newz = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // Initialize with an empty string
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleHover = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200); // Adjust the delay as needed
  };

  const handleMenuHover = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsHovered(false);
  };

  return (
    <div
      className="relative bg-red-400"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to="#"
        onMouseEnter={handleHover}
        // Instead of activeClassName, use className for NavLink
        className={isHovered ? "active" : ""}
      >
        News
      </NavLink>
      {isHovered && (
        <div
          className="absolute z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          ref={menuRef}
          onMouseEnter={handleMenuHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => handleCategorySelect("technology")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Technology
            </button>
            <button
              onClick={() => handleCategorySelect("sport")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Education
            </button>
          </div>
        </div>
      )}
      {selectedCategory && <FetchNewz category={selectedCategory} />}
    </div>
  );
};

export default Newz;
