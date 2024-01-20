// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-200 container mx-auto max-w-[800px] p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="text-gray-600">
        Welcome to My College, where excellence in education meets a vibrant campus life. We strive to provide
        world-class education and foster a community that values diversity, innovation, and collaboration.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-600">
          To empower students with knowledge and skills, cultivate a passion for learning, and prepare them to
          make a positive impact on the world.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
        <p className="text-gray-600">
          To be a leading institution in providing holistic education, fostering creativity, and producing
          responsible global citizens.
        </p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Values</h3>
        <ul className="pl-6 text-gray-600 list-none">
          <li>Excellence in Education</li>
          <li>Diversity and Inclusion</li>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Integrity</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
