// TopCities.jsx
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import TopCitiesItem from './TopCitiesItem';


const TopCities = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  

  const API = "https://7ed8844f-7000-4914-b6cf-4322a593f12c-00-1169bryjdsks8.pike.replit.dev/Home";

  async function fetchData() {
     setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPosts(data)
    } catch (error) {
      console.log("error ala re gandu");
      // setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    console.log("useEffect is running")
  }, []);
  
  //

  return (
    <div className=' w-full '>
       { loading ?
            (
                <Spinner />
            ) : posts.length > 0 ? 
            
              ( <div className='w-full flex justify-center'>

                <div className=' max-w-[1180px] flex -space-x-5 overflow-x-hidden'>
                    {posts.map((post, index) => (
                    <TopCitiesItem post={post} key={index} />
                    ))}
                </div>
               
              </div>
            ) : (
                <div className='font-bold flex justify-center items-center text-3xl m-10'>
                  No Data found
                </div>
            )
        }
    </div>
  );
};

export default TopCities;
