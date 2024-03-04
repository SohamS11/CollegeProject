import CourseData from "../../Data/CourseData";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SelectCourse = () => {
  return (
    <>
      <div className="mx-auto lg:w-[1300px] w-screen  my-2">
        <h1 className="font-semibold text-3xl mt-3 px-4">Select The Course</h1>
        <div className="flex flex-wrap gap-3 py-2 px-4">
          {CourseData.map((item, index) => {
            return <ItemButton data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

const ItemButton = ({ data }) => {
  const navigate = useNavigate(); // Call useNavigate inside the functional component
  return (
    <button
      className="text-sm border px-2 py-1 rounded-md hover:bg-blue-500"
      onClick={() => navigate(`/course/${encodeURIComponent(data.link)}`)}
    >
      <h2 className="flex">
        <BsDot className="text-2xl mt-0" /> {data.text}
      </h2>
    </button>
  );
};

export default SelectCourse;
