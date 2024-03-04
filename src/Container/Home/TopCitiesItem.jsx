import React from "react";
import { useNavigate } from "react-router-dom";

const TopCitiesItem = ({ data }) => {
  const navigate = useNavigate();
  const HandleRoute = (route) => {
    navigate(route);
  };
  return (
    // hover:scale-110 transition duration-300 ease-in
    <div
      className="mt-5 mb-10  pt-5 mr-5 flex justify-between hover:scale-110 transition duration-300 ease-in items-center flex-col border p-2 rounded-md hover:shadow-lg hover:underline cursor-pointer"
      onClick={() => HandleRoute(`collegelist/${data.link}`)}
    >
      {/* this is an svg icon   */}
      <div
        dangerouslySetInnerHTML={{ __html: data.svg }}
        className="h-[80px] w-[100px] flex content-end justify-end grow-0 "
      />
      <p className="mt-2 capitalize ">{data.name}</p>
    </div>
  );
};

export default TopCitiesItem;
