import React from "react";
import TopCitiesItem from "../../Container/Home/TopCitiesItem";
import { TopCitiesData } from "../../Data/TopCitiesData";

const TopCities = () => {
  return (
    <div>
      <div className="lg:w-[1300px] md:w-[786px] sm:w-[640px] lg:mx-auto  mx-3">
        <h1 className="font-semibold text-3xl mt-3"> Top Cities </h1>
        <div className="flex overflow-x-auto mt-0">
          
          {TopCitiesData.map((item, index) => {
            return <TopCitiesItem data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};



export default TopCities;
