import React from "react";
import { CheckCircle } from "feather-icons-react";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-4 md:py-6 rounded-bl-3xl rounded-br-3xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start">
          {/* Feature 1 */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
            <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Write a Review</h3>
              <p className="text-gray-600 dark:text-gray-400">Review colleges.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
            <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Search Exams</h3>
              <p className="text-gray-600 dark:text-gray-400">Search for exams.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
            <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Set Goals</h3>
              <p className="text-gray-600 dark:text-gray-400">Set exam timetables.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
            <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Internships</h3>
              <p className="text-gray-600 dark:text-gray-400">Find internships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
