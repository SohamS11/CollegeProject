import { CheckCircle } from "feather-icons-react";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import Color from "../../Theme/Color";
import React from "react";

const FeaturesSection = () => {
  const { darkMode } = useThemeContext();

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
    <section className="py-4 md:py-6 rounded-bl-3xl rounded-br-3xl mt-2">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
          Key Features
        </h2>
        <div className="flex flex-wrap justify-center">
          {/* Feature Cards */}
          <div className="flex justify-center">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  darkMode ? Color.dark.card : Color.light.card
                } rounded-3xl p-4 shadow-md mb-4 mr-4 cursor-pointer group overflow-hidden transition-transform transform hover:scale-105`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
