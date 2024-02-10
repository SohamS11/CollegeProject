import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../Data/ApiData";

const Exam = () => {
  const { id } = useParams();
  const [examData, setExamData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Apiurl}/exams/${id}`);
        if (response.status === 200) {
          setExamData(response.data);
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
  }, []);
  return (
    <>
      <h1>this webpage of exam</h1>
    </>
  );
};

export default Exam;
