import React from 'react';

const Hero_Section = () => {
  return (
    <div>
          <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: 'url("../src/images/collegeBackground.jpg")'}}>
        <div className="text-white text-left p-8 mt-0 m-20">
        <div className="mt-40">
          <h1 className="text-4xl font-bold mb-4">Welcome to My College</h1>
          <p className="text-lg mb-8">Discover a world of knowledge and opportunities.</p>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-700">Apply Now</button>
        </div>
        </div>
      </div>
        
    </div>
  )
}

export default Hero_Section