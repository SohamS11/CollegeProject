import React from "react";
import TopCitiesItem from "../../Container/Home/TopCitiesItem";
import { TopCitiesData } from "../../Data/TopCitiesData";

const TopCities = () => {
  return (
    <div>
      <div className="max-w-screen-lg w-full lg:mx-auto mx-3">
        <div className="flex overflow-x-auto">
          {TopCitiesData.map((item, index) => {
            return <TopCitiesItem data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCities;
