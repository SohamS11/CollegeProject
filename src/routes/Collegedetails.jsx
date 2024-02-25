import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../Data/ApiData";
import { MdLocationOn } from "react-icons/md";
import Courses from "../Component/Collegedetails/Courses";
import Spinner from "../component/Spinner";

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
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto mt-10  py-8 lg:w-[1300px]  md:w-[786px] sm:w-[640px]">
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
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(collegeData.article.description),
            }}
            className="cdcms_college_highlights"
          ></div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const sanitizeHTML = (htmlString) => {
  htmlString = htmlString.replace(
    /<a[^>]*href\s*=\s*["'][^"']*zollege\.in[^"']*["'][^>]*>/gi,
    ""
  );
  htmlString = htmlString.replace(/<iframe.*?<\/iframe>/gi, "");
  htmlString = htmlString.replace(/data-src=/gi, "src=");
  htmlString = htmlString.replace(/<center style="position: relative; padding: 28%;"><\/center>/gi,'');
  return htmlString;
};

export default CollegeDetail;
