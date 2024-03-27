import CourseData from "../../Data/CourseData";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";

const SelectCourse = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className="mx-auto lg:w-[1300px] w-screen  my-2 mt-20 flex flex-wrap items-center">
      <div className="w-full lg:w-1/2 px-4">
        <h1 className="font-semibold text-3xl mt-3">Select The Course</h1>
        <div className="flex flex-wrap gap-3 py-2">
          {CourseData.map((item, index) => (
            <ItemButton data={item} key={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <ExternalImages />
      </div>
    </div>
  );
};

const ExternalImages = () => {
  // Define your logic for external images here
  return (
    <div className="w-full flex gap-3 overflow-x-hidden">
      <div className="flex-shrink-0 w-[350px] h-[350px]">
        <img src="../src/assets/icons/college.png" alt="Image 1" />
      </div>
      <div className="flex-shrink-0 w-[350px] h-[350px]">
        <img src="../src/assets/icons/exam.png" alt="Image 2" />
      </div>
      {/* Add more images as needed */}
    </div>
  );
};

const ItemButton = ({ data, darkMode }) => {
  const navigate = useNavigate(); // Call useNavigate inside the functional component
  return (
    <button
      className={` text-sm border px-2 py-1 rounded-md ${
        darkMode ? Color.dark.card : Color.light.card
      } ${darkMode ? Color.dark.hoverbg : Color.light.hoverbg}`}
      onClick={() => navigate(`/course/${encodeURIComponent(data.link)}`)}
    >
      <h2 className="flex">
        <BsDot className="text-2xl mt-0" /> {data.text}
      </h2>
    </button>
  );
};

export default SelectCourse;
