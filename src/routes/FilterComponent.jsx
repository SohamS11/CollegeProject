import React, { useState } from "react";

const FilterComponent = () => {
  // State to store selected course filter
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // Add course to selected courses array if checked
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        value,
      ]);
    } else {
      // Remove course from selected courses array if unchecked
      setSelectedCourses((prevSelectedCourses) =>
        prevSelectedCourses.filter((course) => course !== value)
      );
    }
  };

  return (
    <div className="border border-gray-300 rounded p-4">
      <h2 className="mb-4 text-lg font-semibold">Courses</h2>
      <input className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" placeholder="search" />
      {/* Checkboxes for course options */}
      <div className="ml-2">
      {["MBA", "BCA", "BBA", "BTECH"].map((course) => (
        <div key={course} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value={course}
              checked={selectedCourses.includes(course)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>{course}</span>
          </label>
        </div>
      ))}
       </div>
      <hr className="mt-5 shadow-black"/>
      <div className="ml-2 mt-10">
        
        <div className="mb-2">
        <h2 className="mb-4">City : </h2>
      <input className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" placeholder="search" />
          <label>
            <input
              type="checkbox"
              value="Mumbai"
              checked={selectedCourses.includes("MBA")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Mumbai</span>
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              value="Delhi"
              checked={selectedCourses.includes("BCA")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Delhi</span>
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              value="Pune"
              checked={selectedCourses.includes("BBA")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Pune</span>
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              value="Aurangabad"
              checked={selectedCourses.includes("BTECH")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Aurangabad</span>
          </label>
        </div>
        {/* Add more checkbox options as needed */}
      </div>
      <hr className="mt-5 shadow-black"/>
      <div className="mt-4">
        {/* Display selected courses */}
        <p>Selected Courses: {selectedCourses.join(", ")}</p>
      </div>
      <div className="ml-2 mt-10">
        <div className="mb-2">
        <h2 className="mb-4">Stream</h2>
      <input className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" placeholder="search" />
          <label>
            <input
              type="checkbox"
              value="Management"
              checked={selectedCourses.includes("MBA")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Management</span>
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              value="BCA"
              checked={selectedCourses.includes("BCA")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Science</span>
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              value="Engineering"
              checked={selectedCourses.includes("BBA")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Engineering</span>
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              value="Art"
              checked={selectedCourses.includes("BTECH")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span>Art</span>
          </label>
        </div>
        {/* Add more checkbox options as needed */}
      </div>
      <div className="mt-4">
        {/* Display selected courses */}
        <p>Selected Courses: {selectedCourses.join(", ")}</p>
      </div>
    </div>
  );
};

export default FilterComponent;
