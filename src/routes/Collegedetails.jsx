import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../Data/ApiData";
import { BsDot } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const CollegeDetail = () => {
  const { id } = useParams();
  const [collegeData, setCollegeData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Apiurl}college?id=${id}`);
        if (response.status === 200) {
          setCollegeData(response.data);
          console.log(response);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }
    fetchData();
  }, [id]); // Added id as dependency to fetch data when id changes

  return (
    <div className="container mx-auto px-4 py-8 lg:w-[1300px]  md:max-w-[786px] sm:max-w-[640px]">
      {error && (
        <p className="text-red-500">There was an error fetching the data.</p>
      )}
      {collegeData ? (
        <>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:mr-8 mb-4 lg:mb-0">
              <img
                className="h-40 w-40 lg:h-48 lg:w-48 object-cover rounded-full"
                src={`https://static.zollege.in/${collegeData.basic_info.logo}`}
                alt="College Logo"
              />
            </div>
            <div className="flex-1 items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">
                {collegeData.college_name}
              </h1>
              <div className="">
                <p className="text-blue-700 font-semibold">
                  Website:{" "}
                  <a href={collegeData.basic_info?.website}>
                    {collegeData.basic_info?.website}
                  </a>
                </p>
                {collegeData.basic_info?.year_founded && (
                  <p>Year of Founded: {collegeData.basic_info?.year_founded}</p>
                )}
              </div>
              <div className="flex items-center  flex-wrap">
                <address className="mr-4 flex items-center">
                  <MdLocationOn className="mr-1" />
                  {collegeData.basic_info.address.map_location},{" "}
                  {collegeData.basic_info.state}
                </address>
                <div className="flex items-center">
                  {collegeData.basic_info?.approved_by?.map((item, index) => (
                    <h1 key={index} className="mr-2">
                      {item}
                    </h1>
                  ))}
                  <h1 className="mr-2">Approved</h1>
                </div>
                <h1>{collegeData.basic_info?.major_stream_rating}</h1>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-2 my-2">
            {collegeData.gallery.photo_app.map((item) => (
              <img
                key={item.id}
                src={item.iamge_path}
                alt={item.description}
                className="object-cover rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto mb-4 md:mb-0"
              />
            ))}
          </div>
          <Courses data={collegeData.course_data} />
          
          <div className="container">
            <h1 className="text-2xl font-semibold mb-4">Agency Rankings</h1>
            <To data={collegeData.ranking} />
          </div>
        </>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

const RankingsTable = ({ rankings }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ranking Agency
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rankings.map((ranking, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{ranking.agency}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {ranking.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{ranking.rank}</td>
              <td className="px-6 py-4 whitespace-nowrap">{ranking.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const To = ({ data }) => {
  // Assuming rankings data is passed as props
  const rankingsData = data;

  // Extracting rankings from the provided object
  const rankings = [];
  for (const agencyId of rankingsData.order) {
    const agency = rankingsData.agencies[agencyId];
    for (const year of agency.years) {
      rankings.push({
        agency: agency.name,
        category: "Commerce", // Assuming the category is Commerce based on the provided data
        rank: `${agency.years.indexOf(year) + 1} out of ${agency.years.length}`,
        year: year,
      });
    }
  }

  return (
    <div className="container mx-auto">
      <RankingsTable rankings={rankings} />
    </div>
  );
};

const Courses = ({ data }) => {
  return (
    <>
      <div>
        <div>
          <h1>Degree :</h1>
          <div className="flex flex-wrap gap-2">
            {data.degrees.map((item, index) => (
              <div
                key={index}
                className="text-sm border px-1 py-1 rounded-md flex items-center "
              >
                <BsDot className="text-2xl" /> <h1>{item.id}</h1>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>Stream : </h1>
          <div className="flex flex-wrap gap-2">
            {data.streams.map((item, index) => (
              <div
                key={index}
                className="text-sm border px-1 py-1 rounded-md flex items-center"
              >
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.courses.map((course) => (
            <div
              className="bg-white shadow-md rounded-lg p-4"
              key={course.course_id}
            >
              <h2 className="text-lg font-bold mb-2">{course.display_name}</h2>
              <p>
                <span className="font-semibold">Duration:</span>{" "}
                {course.duration_year} years
              </p>
              <p>
                <span className="font-semibold">Eligibility:</span>{" "}
                {course.eligibility}
              </p>
              <p>
                <span className="font-semibold">Course Type:</span>{" "}
                {course.type}
              </p>
              <p>
                <span className="font-semibold">Stream:</span>{" "}
                {course.stream_data.name}
              </p>
              <p>
                <span className="font-semibold">Ranking Agency:</span>{" "}
                {course.ranking_data.agency}
              </p>
              <p>
                <span className="font-semibold">Rank:</span>{" "}
                {course.ranking_data.rank}
              </p>
              <a href={course.url} className="text-blue-600 hover:underline">
                More Info
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollegeDetail;
