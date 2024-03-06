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
    <div className="border border-gray-700 rounded-xl px-4 mt-4 bg-gray-800 text-white overflow-y-hidden ">
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
      </div>
      <div
        className="mt-4 max-h-40 overflow-y-auto"
        style={{ paddingRight: "16px", marginBottom: "-16px" }}
      >
        {data.values.map((item, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={item.value}
                className="form-checkbox h-5 w-5 text-blue-400 mr-2 border-gray-300 rounded focus:ring-blue-500"
                checked={
                  selectedFilterData[filterName] &&
                  selectedFilterData[filterName].includes(item.value)
                }
                onChange={() => handleCheckboxChange(filterName, item.value)}
              />
              <span className="text-sm">
                {item.text}{" "}
                <span className="text-blue-400">({item.count})</span>{" "}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
