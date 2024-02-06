import { TopSreamsList } from "../../Data/TopStreamsCollegeData";
import { TopStreamsCollegeData } from "../../Data/TopStreamsCollegeData";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

const TopStreamsCollege = () => {
  const [currentData, setCurrentData] = useState(3);
  // This currentdata store which array to show on the screen

  return (
    <div>
      <div className="flex gap-5">
        {TopSreamsList.map((item) => {
          // This the list of stremas like management ,laws,medical engineering  etc....
          // updateData is the function which updates the current data after the click and updateData is called children components
          // eslint-disable-next-line react/jsx-key
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
  return (
    <button
      onClick={() => updateData(data.id)}
      className="text-sm border px-2 py-1 rounded-md"
    >
      <h2 className="flex">
        <BsDot className="text-2xl mt-0" /> {data.name}
      </h2>
    </button>
  );
};

const ItemList = ({ data }) => {
  return (
    <div>
      {/* upper div  */}
      <div>
        <div>
          <h1>{data.name}</h1>
          <img src={data.logo} className="h-10 w-10 " />
          <img src={data.cover_image} className="h-10 w-10 " />
          <p>
            {data.city}, {data.state}
          </p>
        </div>
      </div>

      {/* below div */}
      <div className="bg-[#f7f7f7]">
        {/* <p> {fees.fee}</p> */}
        {/* Iterate over the fees array and display fee information */}
        {/* {data.fees.map((fee) => (
         <div>
            <p>{fee.short_form}</p>
         </div>
        ))} */}
      </div>
    </div>
  );
};
export default TopStreamsCollege;
