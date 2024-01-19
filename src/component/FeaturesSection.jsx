// src/components/FeaturesSection.jsx
import React from 'react';
import { CheckCircle } from 'feather-icons-react'

const FeaturesSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="flex flex-wrap justify-center">
          {/* Feature 1 */}
          <div className="flex items-center mb-4 mr-8">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              {/* Replace with your feature icon */}
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">write a review</h3>
              <p className="text-gray-600">review of college.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center mb-4 mr-8">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              {/* Replace with your feature icon */}
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Serach Exam</h3>
              <p className="text-gray-600">search for exam</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              {/* Replace with your feature icon */}
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Set Goal</h3>
              <p className="text-gray-600">set time table for exam</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              {/* Replace with your feature icon */}
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Intership</h3>
              <p className="text-gray-600">get interships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
