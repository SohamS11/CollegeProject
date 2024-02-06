import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Apiurl } from "../Data/ApiData";

const CollegeList = () => {
  const { id } = useParams();
  const [collegeListData, setCollegeListData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const containerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    fetchData();
  }, [pageNumber]); // Fetch data when page number changes

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY.current) {
        // User is scrolling up
        return;
      }
      prevScrollY.current = currentScrollY;
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollHeight - scrollTop <= clientHeight) {
        if (!loading) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]); // Listen for scroll events and trigger page number increment when reaching bottom

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        Apiurl + "college_list/" + id + "?page=" + pageNumber
      );
      setTitle(response.data?.leadFormTitle);
      setCollegeListData((prevData) => [
        ...prevData,
        ...response.data.colleges,
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCollegeListData([]);
      setLoading(false);
    }
  };
  return (
    <div
      className="container mx-auto mt-4 max-w-screen w-full px-4"
      ref={containerRef}
    >
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collegeListData.map((item, index) => (
          <CollegeListItem data={item} key={index} />
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
};

const CollegeListItem = ({ data }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg shadow-md">
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
            <h2 className="text-md  font-bold">{data?.college_name}</h2>
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
          <button className="bg-blue-500 text-white px-2 py-1 rounded-lg">
            Apply Now
          </button>
        </div>
        <div>
          <h3 className="font-semibold">
            <div>
              {data?.rankingData[0] && (
                <h3 className="font-semibold">
                  The {data?.rankingData[0]?.agency} ranking{" "}
                  {data?.rankingData[0]?.rankingofCollege} out of{" "}
                  {data?.rankingData[0]?.rankingOutOfTotalNoOfCollege} in{" "}
                  {data?.rankingData[0]?.year}
                </h3>
              )}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CollegeList;
