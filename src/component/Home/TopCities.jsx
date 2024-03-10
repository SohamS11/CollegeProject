import TopCitiesItem from "../../Container/Home/TopCitiesItem";
import { TopCitiesData } from "../../Data/TopCitiesData";

const TopCities = () => {
  return (
    <div className="w-full lg:w-[1300px] overflow-hidden mx-auto">
      <div className="  px-4">
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