import { TopSreamsList } from "../../Data/TopStreamsCollegeData";
import { TopStreamsCollegeData } from "../../Data/TopStreamsCollegeData";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md"; //location wala icon

const TopStreamsCollege = () => {
  const [currentData, setCurrentData] = useState(3);
  // This currentdata store which array to show on the screen

  return (
    <div className="flex justify-center ">

        <div className="w-[1300px]">
          <h1 className="font-semibold text-3xl mt-3"> 
           Top College 
          </h1>
          <p className="ml-5 mb-4">
            Choose your Dream College
          </p>

          <div className="flex gap-5">

            {TopSreamsList.map((item) => {
              // This the list of stremas like management ,laws,medical engineering  etc....
              // updateData is the function which updates the current data after the click and updateData is  called children components
              // eslint-disable-next-line react/jsx-key
              return <ItemButton data={item} updateData={setCurrentData} />;
            })}

          </div>

          <div  className="grid grid-rows-3 grid-cols-3 gap-x-5 gap-y-4">
          
            {TopStreamsCollegeData[currentData].map((item) => {
              // This top college data of that strems
              return <ItemList data={item} />;
            
            })}
          </div>

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
  console.log(data.logo);

  return(
    
    <div className=" flex flex-col justify-between mt-9 border rounded-md hover:shadow-xl mb-5">
        {/* upper div  */}
        <div className="flex mb-5 py-3">
          <div className="flex">
            <div className=" border-black rounded-full overflow-hidden ml-4">
              <img
                src={`https://static.zollege.in/public/college_data/images/logos/${data.logo}?tr=h-56,w-56,c-force`}
                className="h-[56px] w-[56px]"
              />
            </div>
            <div className="ml-5">
              <h1 className="font-semibold text-lg">{data.name}</h1>
              <p className="flex opacity-70 gap-2">
                <MdLocationOn /> {data.city}, {data.state}
              </p>
            </div>
          </div>
        </div>
  
      {/* below div */}
      <div className="bg-[#f7f7f7] flex flex-col">
        {/* Iterate over the fees array and display fee information */}
        {data.fees.map((fee, index) => (

          <div key={index} className="bg-[#f7f7f7] p-2">

            <p>{fee.short_form}</p>
            <p>₹{fee.fee} {fee.type}</p>

          </div>
        ))}
      </div>
  </div>
  

  );
    
};
export default TopStreamsCollege;
