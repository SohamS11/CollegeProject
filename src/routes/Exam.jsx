import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../Data/ApiData";
import { useThemeContext } from "../ContextApi/ThemeContext";
import Spinner from "../component/Spinner";

const Exam = () => {
  const { id } = useParams();
  const [examData, setExamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { darkMode } = useThemeContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Apiurl}exams/${id}/overview`);
        if (response.status === 200) {
          setExamData(response.data.data);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="mt-10">
      {loading && <Spinner />}
      {!loading && error && <p>Error fetching data.</p>}
      {!loading && !error && (
        <div className={`${darkMode ? "Dark" : "Light"} min-h-screen`}>
          <div className="container mx-auto px-4 py-8 lg:w-[1300px] md:w-[786px] sm:w-[640px]">
            <div>
              <h1 className=" font-bold flex items-center justify-center">{examData ? examData.breadCrumbs[1]?.name : null}</h1>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(examData?.description),
              }}
              className="cdcms_college_highlights"
            ></div>
          </div>
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

  // Remove all <iframe> tags
  htmlString = htmlString.replace(/<iframe.*?<\/iframe>/gi, "");

  // Remove specific inline styles
  htmlString = htmlString.replace(
    /style\s*=\s*(['"])(?:(?!\1|background|border|padding|text-align).)*?\1/gi,
    ""
  );

  // Adjust specific inline styles
  htmlString = htmlString.replace(
    /style\s*=\s*(['"])(?:(?!\1|background|border|padding|text-align).)*background\s*:\s*#[a-fA-F0-9]+;\s*(?:(?!\1).)*?\1/gi,
    ""
  );
  htmlString = htmlString.replace(
    /style\s*=\s*(['"])(?:(?!\1|background|border|padding|text-align).)*background\s*:\s*rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\);\s*(?:(?!\1).)*?\1/gi,
    ""
  );

  return htmlString;
};

export default Exam;
