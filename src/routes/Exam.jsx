import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../Data/ApiData";

const Exam = () => {
  const { id } = useParams();
  const [examData, setExamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Apiurl}exams/${id}/overview`);
        console.log(response);
        if (response.status === 200) {
          setExamData(response.data.data);
          console.log(response);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
        setLoading(false);
        console.log(err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8 mt-10 lg:w-[1300px]  md:w-[786px] sm:w-[640px]">
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}
      {examData && (
        <div>
          {/* css add kraychi baki ahe  */}
          <div>
            <h1>  </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(examData?.description),
            }}
            className="cdcms_college_highlights"
          ></div>
        </div>
      )}
    </div>
  );
};

const sanitizeHTML = (htmlString) => {
  // Remove all <a> tags with href containing "zollege.in"
  htmlString = htmlString.replace(
    /<a[^>]*href\s*=\s*["'][^"']*zollege\.in[^"']*["'][^>]*>/gi,
    ""
  );
  htmlString = htmlString.replace(/<iframe.*?<\/iframe>/gi, "");
  return htmlString;
};
export default Exam;
