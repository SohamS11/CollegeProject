import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";

const StreamsItem = ({ data }) => {
  const { darkMode } = useThemeContext();
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <div
      className={`p-2 flex gap-6 justify-start items-start rounded-md cursor-pointer transition duration-300 ease-in transform hover:shadow-lg hover:scale-105 ${
        darkMode ? Color.dark.hoverbg : Color.light.hoverbg
      }`}
      onClick={() => handleRoute(`collegelist/${data.link}`)}
    >
      <div
        dangerouslySetInnerHTML={{ __html: data.svg }}
        className="h-[40px] w-[50px] flex content-end justify-end"
        style={{
          filter: darkMode
            ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(319deg) brightness(100%) contrast(100%)"
            : "invert(0)",
        }}
      />
      <div>
        <h1 className="text-md font-medium">{data.name}</h1>
        <span className="text-sm font-light">{data.number}</span>
      </div>
    </div>
  );
};

export default StreamsItem;
