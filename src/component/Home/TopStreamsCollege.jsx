import { TopSreamsList } from "../../Data/TopStreamsCollegeData";
import { TopStreamsCollegeData } from "../../Data/TopStreamsCollegeData";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md"; //location wala icon
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";

const TopStreamsCollege = () => {
  const [currentData, setCurrentData] = useState(13);
  const [itemNumber, setItemNumber] = useState(3);

  useEffect(() => {
    function Getsizewindows() {
      if (window.innerWidth <= 640) {
        setItemNumber(3);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
        setItemNumber(6);
      } else {
        setItemNumber(9);
      }
    }
    window.addEventListener("resize", Getsizewindows);
    Getsizewindows();

    return () => {
      window.removeEventListener("resize", Getsizewindows);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[1300px]">
        <h1 className="font-semibold text-3xl mt-3 px-4">Top College</h1>
        <p className="ml-5 mb-4">Choose your Dream College</p>
        <div className="flex gap-2 flex-wrap px-4">
          {TopSreamsList.map((item, index) => {
            return (
              <ItemButton
            
                key={index}
                data={item}
                updateData={setCurrentData}
                activeid={currentData}
              />
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-1/2 gap-x-4 px-4">
          {TopStreamsCollegeData[currentData]
            .slice(0, itemNumber)
            .map((item, index) => (
              <ItemList key={index} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

const ItemButton = ({ data, updateData, activeid }) => {
  const { darkMode } = useThemeContext();
  return (
    <button
      onClick={() => updateData(data.id)}
      className={`text-sm border px-2 py-1 rounded-md ${
        data.id === activeid
          ? darkMode
            ? "bg-blue-600"
            : "bg-blue-500"
          : darkMode
          ? Color.dark.card
          : Color.light.card
      }`}
    >
      <h2 className="flex">
        <BsDot className="text-2xl mt-0" /> {data.name}
      </h2>
    </button>
  );
};

const ItemList = ({ data }) => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();
  const HandleRoute = () => {
    navigate(`/collegedetail/${encodeURIComponent(data.url)}`);
  };

  return (
    <div
      className={`flex flex-col justify-between mt-3 border rounded-lg hover:shadow-xl mb-2 cursor-pointer ${
        darkMode ? Color.dark.card : Color.light.card
      }`}
      onClick={HandleRoute}
    >
      <div className="flex mb-5 py-3">
        <div className="border-black rounded-full overflow-hidden ml-4">
          <img
            src={`https://static.zollege.in/public/college_data/images/logos/${data.logo}?tr=h-56,w-56,c-force`}
            className="h-[56px] w-[56px]"
          />
        </div>
        <div className="ml-4">
          <h1 className="font-semibold text-lg">{data.name}</h1>
          <p className="flex opacity-70 gap-2 items-center flex-grow">
            <MdLocationOn /> {data.city}, {data.state}
          </p>
        </div>
      </div>
      <div
        className={`flex justify-between rounded-lg ${
          darkMode ? Color.dark.card2 : Color.light.card2
        }`}
      >
        {data.fees.map((fee, index) => (
          <div key={index} className="p-2" style={{ width: "50%" }}>
            <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {fee.short_form}
            </p>
            <p>
              ₹{fee.fee} {fee.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStreamsCollege;
