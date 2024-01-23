import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div
      className="mt-2 max-w-screen-xl mx-auto px-6"
      onClick={()=>handleNavigation("Search")}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
      />
    </div>
  );
};

export default SearchBox;
