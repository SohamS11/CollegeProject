import HeroSection from "../component/Home/Hero_Section";
import FeaturesSection from "../component/Home/FeaturesSection";
import Footer from "../component/Home/Footer";
import TopCities from "../component/Home/TopCities";
import Streams from "../Component/Home/Streams";
import TopStreamsCollege from "../Component/Home/TopStreamsCollege";
import SelectCourse from "../Component/Home/SelectCourse";
import { useThemeContext } from "../ContextApi/ThemeContext";
import Color from "../Theme/Color";

const Home = () => {
  const { darkMode } = useThemeContext();
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TopCities />
      <Streams />
      <SelectCourse />
      <TopStreamsCollege />
      <Footer />
    </div>
  );
};

export default Home;
