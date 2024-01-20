import React, { useState, useEffect } from 'react';
// import collegeData from '../component/collegeData.json';
import collegeData from '../../public/collegeData.json'

const CollegeComponent = () => {
  const [collegeData, setCollegeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../collegeData.json');
        const data = await response.json();
        setCollegeData(data.college);
      }catch (error) {
        console.error('Error fetching college data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {collegeData ? (
        <div>
          <h1>{collegeData.name}</h1>
          <p>Location: {collegeData.location}</p>

          <h2>Departments:</h2>
          {collegeData.departments.map((department) => (
            <div key={department.id}>
              <h3>{department.name}</h3>
              <ul>
                {department.courses.map((course) => (
                  <li key={course.id}>{course.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CollegeComponent;
