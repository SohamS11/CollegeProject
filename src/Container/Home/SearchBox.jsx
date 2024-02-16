import React from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  return (
    <div className="mt-2 max-w-screen-xl mx-auto px-6 w-32">
      <Link to="/search">
        <div className=" lg:w-60 md:w-30 w-24 rounded-md bg-gray-200 text-gray-700 leading-tight  py-2 px-2">
          Search...
        </div>
      </Link>
    </div>
  );
};

export default SearchBox;
