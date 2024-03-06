// TopCitiesItem.js
import React from "react";
import { useNavigate } from "react-router-dom";

const TopCitiesItem = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white mt-5 mb-10 pt-5 mr-5 flex justify-between hover:scale-110 transition duration-300 ease-in items-center flex-col border p-2 rounded-md hover:shadow-lg hover:underline cursor-pointer"
      onClick={() => handleRoute(`collegelist/${data.link}`)}
    >
      {/* SVG icon */}
      <div
        dangerouslySetInnerHTML={{ __html: data.svg }}
        className="h-[80px] w-[100px] flex content-end justify-end grow-0 filter grayscale "
        style={{ filter: "invert(100%)" }} 
      />
      <p className="mt-2 capitalize">{data.name}</p>
    </div>
  );
};

export default TopCitiesItem;
