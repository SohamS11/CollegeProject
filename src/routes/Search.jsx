import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Apiurl } from "../Data/ApiData";
import { debounce } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchEmpty, setSearchEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const HandleRoute = (route) => {
    navigate(route);
  };

  const debouncedSearch = useCallback(
    debounce(async (value) => {
      try {
        setLoading(true);
        const response = await axios.get(`${Apiurl}search?q=${value}`);
        if (response.status === 200 && response.data.output != null) {
          setSearchData(response.data.output);
          setSearchEmpty(!response.data || response.data.output.length === 0);
        } else {
          setSearchData([]);
          setSearchEmpty(true);
        }
      } catch (error) {
        setSearchData([]);
        setSearchEmpty(true);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setShowSearch(false);
      setSearchData([]);
      setSearchEmpty(false);
    } else {
      setShowSearch(true);
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <>
      <div className="flex justify-center items-start  h-screen px-8 py-5">
        <div className="mt-4 mx-auto w-full h-96 px-6 py-4 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for colleges, Courses, Exams or Articles..."
              value={searchQuery}
              autoFocus
              onChange={handleSearch}
              className="w-full rounded-lg bg-gray-200 text-gray-700 leading-tight focus:outline-none py-3 px-3 pr-20"
            />
            <div className="flex gap-3">
              {searchQuery && (
                <>
                  <div className="absolute top-2 right-8 font-medium focus:outline-none  px-1 py-0.5 rounded-full cursor-pointer text-blue-700">
                    <span onClick={() => setSearchQuery("")}>Clear</span>
                  </div>
                </>
              )}
              <button
                className="absolute top-2.5 right-2 font-bold text-black focus:outline-none px-1 py-0.5 cursor-pointer"
                onClick={() => HandleRoute("/")}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
          </div>
          {showSearch && (
            <>
              {loading && (
                <div className="flex justify-center items-center text-black font-medium mt-5">
                  <p>Loading...</p>
                </div>
              )}
              {!loading && searchData.length > 0 && (
                <div className="overflow-y-auto max-h-[600px] mt-2 py-2">
                  {searchData.map((result, index) => (
                    <>
                      <SearchItem item={result} key={index} />
                    </>
                  ))}
                </div>
              )}

              {!loading && searchEmpty && (
                <div className="flex justify-center items-center text-black font-medium mt-5">
                  <p>No results found</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const SearchItem = ({ item }) => {
  const navigate = useNavigate();
  function HandleRoute() {
    if (item.item_type === "college") {
      navigate(`/collegedetail/${encodeURIComponent(item.url)}`);
    } else if (item.item_type === "course") {
      navigate(`/course/${encodeURIComponent(item.url)}`);
    } else if (item.item_type === "exam") {
      navigate(`/exam/${encodeURIComponent(item.url)}`);
    } else {
      navigate(`/collegelist/${encodeURIComponent(item.url)}`);
    }
  }
  return (
    <div
      className="flex justify-between items-center gap-2 mx-2 py-1 cursor-pointer"
      onClick={() => HandleRoute()}
    >
      <div className="flex gap-3 justify-start items-center py-2">
        <img
          src={
            item.logo
              ? item.logo
              : "https://th.bing.com/th/id/OIP.GnqZiwU7k5f_kRYkw8FNNwHaF3?w=277&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          }
          className="w-14 h-14"
        />
        <div>
          <h1>{item.name}</h1>
        </div>
      </div>
      <div>
        <h1>{item.item_type}</h1>
      </div>
    </div>
  );
};
export default Search;
