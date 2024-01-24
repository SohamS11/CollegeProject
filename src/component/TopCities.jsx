import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import TopCitiesItem from "./TopCitiesItem"
const TopCities = () => {
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]); 

    const API = "https://7ed8844f-7000-4914-b6cf-4322a593f12c-00-1169bryjdsks8.pike.replit.dev/Home";

    async function fetchData(){

        try {
         setLoading(true);
         const res = await fetch(API) ;
         const data = await res.json();
         console.log(data);
         setPosts(data); 
            console.log("function call hotoy");

        } catch (error) {
            console.log("error ala re gandu");
            setPosts([]);
        }

        setLoading(false);
    };
        // fetch data function call kel prateyk render la 
    useEffect(()=>{
        fetchData();
        console.log("useeffect kam krt ahe ")
    },[])

  return (

    <div>
        {
            loading ? <Spinner/> :
            posts.length > 0 ?
            (
                <div className='  flex justify-center items-center '>
                    <div className=' max-w-[1080px] flex  max-h-[300px]  overflow-x-auto  '>
                        {
                            posts.map((post,index)=>{
                                return <TopCitiesItem post={post} key={index}/>
                            })
                        }
                    </div>  
                </div>

            ):
            (
                <div>
                    No Data found 
                </div>
            ) 

        }
    </div>

  );
}

export default TopCities