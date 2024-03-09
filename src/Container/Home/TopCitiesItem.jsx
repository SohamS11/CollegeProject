import { useNavigate } from "react-router-dom";
import { useThemeContext } from "./../../ContextApi/ThemeContext";
import { kebabCase } from "lodash";
import Color from "../../Theme/Color";

const TopCitiesItem = ({ data }) => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <div
      className={`mt-5 mb-10 pt-5 mr-5 flex justify-between hover:scale-110 transition duration-300 ease-in items-center flex-col border p-2 rounded-md hover:shadow-lg hover:underline cursor-pointer ${
        darkMode ? Color.dark.card : Color.light.card
      }`}
      onClick={() => handleRoute(`collegelist/${data.link}`)}
    >
      <div
        dangerouslySetInnerHTML={{ __html: data.svg }}
        className={`h-[80px] w-[100px] flex content-end justify-end grow-0 filter grayscale ${
          darkMode ? "filter-invert" : ""
        }`}
        style={{
          filter: darkMode
            ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(319deg) brightness(100%) contrast(100%)"
            : "invert(0)",
        }}
      />
      <p className="mt-2 capitalize">{data.name}</p>
    </div>
  );
};

export default TopCitiesItem;
