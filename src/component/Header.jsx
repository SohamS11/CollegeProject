// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const API = "https://7ed8844f-7000-4914-b6cf-4322a593f12c-00-1169bryjdsks8.pike.replit.dev/search";

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(API, { params: { q: searchQuery } });
        setApiData(response.data);
      } catch (error) {
        console.log('API Error:', error);
      }
    };

    // Only fetch API data if the query is not empty
    if (searchQuery.trim() !== "") {
      fetchApiData();
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <header className="text-black shadow-md">
      <div className="shadow-md pb-5">
        <div className="container mx-auto flex items-center justify-between max-w-[1180px] ml-60">
          <div className="flex items-center">
            <div className="font-bold text-xl">MyCollege</div>
          </div>
          <div className="mt-2 max-w-screen-xl mx-auto px-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
            />

            {(apiData?.length ?? 0) === 0 ? (
              <p className=" text-gray-500"></p>
            ) : (
              apiData.map((current) => (
                <div key={current.id} className="flex justify-center items-center mt-4">
                  <div>
                    <img
                      src={`https://static.zollege.in/public/college_data/images/logos/1470400138images.jpg`}
                      alt={`${current.name} Logo`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">{current.name}</div>
                </div>
              ))
            )}
          </div>
          <div className="text-black text-center mx-auto">
            <nav className="space-x-4">
              <ul className="flex space-x-4">
                <li>
                  <button onClick={() => handleNavigation('/')} className="hover:text-gray-300">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/about')} className="hover:text-gray-300">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/contact')} className="hover:text-gray-300">
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/department')} className="hover:text-gray-300">
                    Department
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
