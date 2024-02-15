import { CheckCircle } from "feather-icons-react";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-200 py-4 md:py-6 rounded-bl-3xl rounded-br-3xl ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Key Features</h2>
        <div className="flex flex-wrap gap-4 justify-center items-start">
          {/* Feature 1 */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Write a Review</h3>
              <p className="text-gray-600">Review colleges.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Search Exams</h3>
              <p className="text-gray-600">Search for exams.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Set Goals</h3>
              <p className="text-gray-600">Set exam timetables.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Internships</h3>
              <p className="text-gray-600">Find internships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
