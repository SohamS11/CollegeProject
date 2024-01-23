import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Apiurl } from "../Data/Data";
import { debounce } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchEmpty, setSearchEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleroute=(route)=>{
    navigate(route);
  }

  const debouncedSearch = useCallback(
    debounce(async (value) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${Apiurl}search?q=${value}`
        );
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
        <div className="mt-4 mx-auto w-full px-6 py-4 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Colleges"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full rounded-lg bg-gray-200 text-gray-700 leading-tight focus:outline-none py-3 px-3 pr-20"
            />
            <div className="flex gap-3">
              {searchQuery && (
                <>
                  <div className="absolute top-2 right-8 font-medium text-black focus:outline-none  px-1 py-0.5 rounded-full cursor-pointer text-blue-700">
                    <span onClick={() => setSearchQuery("")}>Clear</span>
                  </div>
                </>
              )}
              <button className="absolute top-2.5 right-2 font-bold text-black focus:outline-none px-1 py-0.5  cursor-pointer" onClick={()=>handleroute('home')}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
          {showSearch && (
            <>
              {loading && <p>Loading...</p>}
              {!loading && searchData.length > 0 && (
                <div className="overflow-y-auto max-h-96 mt-2 py-2">
                  {searchData.map((result, index) => (
                    <>
                      <SearchItem item={result} key={index} />
                    </>
                  ))}
                </div>
              )}
              {!loading && searchEmpty && <p>No results found.</p>}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const SearchItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center gap-2 mx-2 py-1">
      <div className="flex gap-3 justify-start items-center py-2">
        <img src={item.logo} className="w-14 h-14" />
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
