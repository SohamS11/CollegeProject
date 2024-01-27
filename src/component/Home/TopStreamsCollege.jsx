import { TopSreamsList } from "../../Data/TopStreamsCollegeData";
import { TopStreamsCollegeData } from "../../Data/TopStreamsCollegeData";
import { useState } from "react";

const TopStreamsCollege = () => {
  const [currentData, setCurrentData] = useState(3);
 // This currentdata store which array to show on the screen 
  return (
    <div>
      <div className="flex gap-5">
        {TopSreamsList.map((item) => {
            // This the list of stremas like management ,laws etc
            // updateData is the function which updates the current data after the click and updateData is called children components
          return <ItemButton data={item} updateData={setCurrentData} />;
        })}
      </div>
      <div>
        
        {TopStreamsCollegeData[currentData].map((item) => {
            // This top college data of that strems
           return <ItemList data={item} />;
        })}
      </div>
    </div>
  );
};

const ItemButton = ({ data, updateData }) => {
  return <button onClick={() => updateData(data.id)}>{data.name}</button>;
};

const ItemList = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};
export default TopStreamsCollege;
