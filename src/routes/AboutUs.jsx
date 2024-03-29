import { useThemeContext } from "../ContextApi/ThemeContext";
import Color from "../Theme/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  const { toggleDarkMode, darkMode } = useThemeContext();

  return (
    <div className={`bg-${darkMode ? 'gray-800' : 'gradient-to-r from-blue-500 to-gray-200'} py-20 px-10 md:px-20 lg:px-40`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Welcome to MyCollege.Com
        </h2>
        <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Welcome to My College, where excellence in education meets a vibrant
          campus life. We strive to provide world-class education and foster a
          community that values diversity, innovation, and collaboration.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center mt-16">
        <div className="max-w-md mx-auto mb-10 md:mb-0 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Mission
            </h3>
            <div className="flex justify-center items-center mb-8">
              <FontAwesomeIcon icon={faBullseye} size="3x" className={`text-${darkMode ? 'gray' : 'blue-500'} mr-4`} />
              <p className={`text-gray-800 ${darkMode ? 'text-white' : ''}`}>
                To empower students with knowledge and skills, cultivate a passion
                get accepted by  love
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto mb-10 md:mb-0 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Vision
            </h3>
            <div className="flex justify-center items-center mb-8">
              <FontAwesomeIcon icon={faEye} size="3x" className={`text-${darkMode ? 'gray' : 'blue-500'} mr-4`} />
              <p className={`text-gray-800 ${darkMode ? 'text-white' : ''}`}>
                To be a leading institution in providing holistic education,
                fostering creativity, and producing responsible global citizens.
                dfdsfdfdsdff
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
