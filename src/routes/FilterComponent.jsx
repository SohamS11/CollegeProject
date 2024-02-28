import React, { useState, useEffect } from "react";
import axios from "axios";
import { Apiurl } from "../Data/ApiData";

const FilterComponent = ({ id }) => {
  const [filterData, setFilterData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(Apiurl + "filter");
        if (response.status === 200) {
          let data = response.data.filters;
          delete data.country_id;
          delete data.approved_by;
          setFilterData(data);
          console.log(response.data.filters);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="border border-gray-300 rounded p-4">
      {Object.keys(filterData).map((key) => (
        <FilterItem key={key} data={filterData[key]} />
      ))}
    </div>
  );
};

const FilterItem = ({ data }) => {
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
                className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              />
              <span className="text-sm">{item.text}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
