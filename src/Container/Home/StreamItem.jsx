import { useNavigate } from "react-router-dom";
import Streams from "./../../Component/Home/Streams";

const StreamsItem = ({ data }) => {
  const navigate = useNavigate();
  const HandleRoute = (route) => {
    navigate(route);
  };
  return (
    <>
      <div
        className="p-2 flex gap-6 justify-start  items-start rounded-md hover:shadow-lg cursor-pointer hover:scale-110 transition duration-300 ease-in hover:dark:bg-gray-800  text-gray-800 dark:text-white"
        onClick={() => HandleRoute(`collegelist/${data.link}`)}
      >
        <div
          dangerouslySetInnerHTML={{ __html: data.svg }}
          className="h-[40px] w-[50px] flex content-end justify-end grow-0  "
          style={{ filter: "invert(100%)" }}
        />
        <div>
          <h1 className="text-md font-medium justify-start flex">
            {data.name}
          </h1>

          <span className="text-sm font-light">{data.number}</span>
        </div>
      </div>
    </>
  );
};

export default StreamsItem;
