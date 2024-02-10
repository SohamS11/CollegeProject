import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../Data/ApiData";

const CollegeDetail = () => {
  const { id } = useParams();
  const [collegeData, setCollegeData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Apiurl}/college?id=${id}`);
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
    <div>
      {error && <p>There was an error fetching the data.</p>}
      {collegeData ? (
        <div>
          <h1>{collegeData.college_name}</h1>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CollegeDetail;
