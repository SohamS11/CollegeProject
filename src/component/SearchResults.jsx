// SearchResults.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import collegeData from '../../public/collegeData.json';

const SearchResults = () => {
  const { query } = useParams();
  const navigate = useNavigate();

  console.log(`Search query: ${query}`);

  // Fetch data based on the query
  const searchData = collegeData.college.departments.filter(
    (department) =>
      department.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log('Search data:', searchData);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {searchData.length > 0 ? (
        <ul>
          {searchData.map((department) => (
            <li key={department.id}>{department.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default SearchResults;
