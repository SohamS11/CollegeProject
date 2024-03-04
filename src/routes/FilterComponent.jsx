import React, { useState, useEffect } from "react";
import axios from "axios";
import { Apiurl } from "../Data/ApiData";
import { useNavigate } from "react-router-dom";

const FilterComponent = ({ Id }) => {
  const [filterData, setFilterData] = useState({});
  const [selectedFilterData, setSelectedFilterData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Apiurl + "filter/" + Id);
        if (response.status === 200) {
          const { filters, selectedParams } = response.data;
          const filteredData = { ...filters };
          const filterKeysToRemove = [
            "country_id",
            "approved_by",
            "course_duration",
            "course_type",
            "sub_stream_id",
          ];
          filterKeysToRemove.forEach((key) => delete filteredData[key]);

          const orderedFilterKeys = [
            "course_tag_id",
            "state",
            "city",
            "stream",
            "exam_id",
            "fees",
            "university_id",
            "type_of_college",
          ];
          const orderedFilterData = orderedFilterKeys.reduce((acc, key) => {
            if (filteredData[key]) {
              acc[key] = filteredData[key];
            }
            return acc;
          }, {});
          setFilterData(orderedFilterData);
          setSelectedFilterData(selectedParams);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [Id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          Apiurl + "filterurl",
          selectedFilterData
        );
        if (response.status === 200) {
          const { fullUrl } = response.data;
          const encodedFullUrl = encodeURIComponent(fullUrl);
          navigate(`/collegelist/${encodedFullUrl}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (Object.keys(selectedFilterData).length !== 0) {
      fetchData();
    }
  }, [selectedFilterData, navigate]);

  const handleCheckboxChange = (filterName, value) => {
    setSelectedFilterData((prevData) => {
      const updatedData = { ...prevData };
      if (updatedData[filterName] === value) {
        delete updatedData[filterName];
      } else {
        if (filterName === "state") {
          delete updatedData["city"];
          updatedData[filterName] = value;
        } else {
          updatedData[filterName] = value;
        }
      }
      return updatedData;
    });
  };

  return (
    <div className="border border-gray-300 rounded p-4">
<<<<<<< HEAD
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
=======
      {Object.entries(filterData).map(([key, value]) => (
        <FilterItem
          key={key}
          filterName={key}
          data={value}
          selectedFilterData={selectedFilterData}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

const FilterItem = ({
  filterName,
  data,
  selectedFilterData,
  handleCheckboxChange,
}) => {
  return (
    <div className="mb-6">
      <div>
        <h2 className="mb-4 text-lg font-semibold">{data.text}</h2>
        <input
          className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="mt-4 max-h-40 overflow-y-auto">
        {data.values.map((item, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={item.value}
                className="form-checkbox h-5 w-5 text-blue-600 mr-2 border-gray-300 rounded focus:ring-blue-500"
                checked={
                  selectedFilterData[filterName] &&
                  selectedFilterData[filterName].includes(item.value)
                }
                onChange={() => handleCheckboxChange(filterName, item.value)}
              />
              <span className="text-sm">
                {item.text}{" "}
                <span className=" text-blue-600">({item.count})</span>{" "}
              </span>
            </label>
          </div>
        ))}
>>>>>>> e60fd0c09d76668e16ff98cd39faa53e0cf742ac
      </div>
    </div>
  );
};

export default FilterComponent;
