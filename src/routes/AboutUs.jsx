import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <div className="bg-slate-20 container mx-auto p-6 rounded-lg shadow-lg mt-10 font-bold h-screen">
      <div className="text-4xl text-left font-bold ml-20">
        <h2 className="text-4xl mb-6 text-left">MyCollege.Com</h2>
        <p className="font-medium">
          Welcome to My College, where excellence in education meets a vibrant
          campus life. We strive to provide world-class education and foster a
          community that values diversity, innovation, and collaboration.
        </p>
      </div>
      <div className="flex m-20 mt-2">
        <div className="container mx-auto mt-20 border-2 p-2 max-w-[600px]">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <FontAwesomeIcon icon={faBullseye} size="6x" />
          <p className="p-10">
            To empower students with knowledge and skills, cultivate a passion
            for learning, and prepare them to make a positive impact on the
            world.
          </p>
        </div>
        <div className=" container mx-auto mt-20 border-2 p-2 max-w-[600px]">
          <h3 className="text-xl font-semibold mb-4">OurVission</h3>
          <FontAwesomeIcon icon={faEye} size="6x" />
          <p className=" mt-10">
            To be a leading institution in providing holistic education,
            fostering creativity, and producing responsible global citizens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
