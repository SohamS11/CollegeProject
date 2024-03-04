import React from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  return (
    <div className="mt-0 mx-auto xl:w-1/3 2xl:w-1/4 flex justify-center">
      <Link to="/search">
        <div className="relative">
          <svg
            className="absolute left-3 top-3 w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.71 19.29l-3.52-3.52a7.45 7.45 0 1 0-1.41 1.41l3.52 3.52a1 1 0 0 0 1.41-1.41zM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"
            />
          </svg>
          <input
            type="text"
            className="block w-full min-w-64 px-10 py-2 rounded-md bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-300 border border-gray-300"
            placeholder="Search..."
          />
        </div>
      </Link>
    </div>
  );
};

export default SearchBox;
