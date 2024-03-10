import React from "react";
import { CheckCircle } from "feather-icons-react";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";


const FeaturesSection = () => {
  const { darkMode } = useThemeContext();

  // Feature data array
  const featureData = [
    {
      title: "College",
      description: "Discover the best colleges for you.",
    },
    {
      title: "Exams",
      description: "Be ready before your exams ....",
    },
    {
      title: "News",
      description: "Stay updated with the latest news.",
    },
    {
      title: "Internships",
      description: "Find exciting internship opportunities.",
    },
  ];

  return (
    <section className="py-4 md:py-6 rounded-bl-3xl rounded-br-3xl">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start">
          {/* Feature Cards */}
          {featureData.map((feature, index) => (
             <div
             key={index}
             className={`flex items-center ${
               darkMode ? Color.dark.card : Color.light.card
             } rounded-xl p-4 shadow-md`}
           >
              <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="dark:text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
