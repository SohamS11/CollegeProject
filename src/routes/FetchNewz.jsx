// FetchNewz.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Color from "../Theme/Color";
import { useThemeContext } from "../ContextApi/ThemeContext";

const FetchNewz = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
   const {darkMode} = useThemeContext()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a2bc1bba49114300a21c62f88713f086`
        );
        console.log("API response:", response.data);
        setData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="container mx-auto mt-20">
      <h3 className="text-2xl font-bold mb-4">
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : ""}{" "}
        News
      </h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className={`p-4 rounded-md shadow-md ${darkMode?Color.dark.card:Color.light.card}`}>
              <h5 className="text-lg font-bold mb-2">{item.title}</h5>
              {item.urlToImage && (
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full rounded-md mb-2 h-44"
                />
              )}
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchNewz;
