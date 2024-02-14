/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Apiurl } from "../Data/ApiData";

const CollegeList = () => {
  const { id } = useParams();
  const [collegeListData, setCollegeListData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [stop, setStop] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (stop) {
      fetchData();
    }
  }, [pageNumber]); // Fetch data when page number changes

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollHeight - scrollTop <= clientHeight && !loading) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]); // Listen for scroll events and trigger page number increment when reaching bottom

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${Apiurl}college_list/${encodeURIComponent(id)}?page=${pageNumber}`
      );

      if (response.status !== 200) {
        setError(true);
        return;
      }
      if (pageNumber === 0) {
        setTitle(response.data?.leadFormTitle || "");
      }
      if (Array.isArray(response.data.colleges)) {
        setCollegeListData((prevData) => [
          ...prevData,
          ...response.data.colleges,
        ]);
      } else {
        setStop(false);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setCollegeListData([]);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div
      className="container mx-auto mt-4 max-w-screen w-full px-4"
      ref={containerRef}
    >
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {error ? (
        <div className="flex justify-center items-center mt-32">
          <h1 className="font-semibold">There is a problem with the API</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collegeListData.map((item, index) => (
            <CollegeListItem data={item} key={index} />
          ))}
        </div>
      )}
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
};

const CollegeListItem = ({ data }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(`/collegedetail/${encodeURIComponent(data.url)}`);
  };

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg shadow-md cursor-pointer"
      onClick={handleRoute}
    >
      <img
        className="w-full h-64 object-cover"
        src={`https://static.zollege.in/${data?.cover}`}
        alt={data?.college_name}
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            className="w-12 h-12 rounded-full mr-3"
            src={`https://static.zollege.in/${data?.logo}`}
            alt={data?.college_name}
          />
          <div>
            <h2 className="text-md font-bold">{data?.college_name}</h2>
            <p className="text-sm font-light">
              {data?.college_city}, {data?.state}
              <span>
                {data?.approvals?.map((item, index) => (
                  <span key={index}> {item}</span>
                ))}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 mb-2">
          <div>
            <h3 className="font-semibold">Course Fees</h3>
            {data?.fees?.map((item, index) => (
              <div key={index}>
                <span>{item.short_form}</span>
                <span className="ml-2">{item.fee}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">
            {data?.rankingData[0] && (
              <div>
                The {data?.rankingData[0]?.agency} ranking{" "}
                {data?.rankingData[0]?.rankingofCollege} out of{" "}
                {data?.rankingData[0]?.rankingOutOfTotalNoOfCollege} in{" "}
                {data?.rankingData[0]?.year}
              </div>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CollegeList;
