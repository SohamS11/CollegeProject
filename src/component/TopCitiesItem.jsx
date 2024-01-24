import React from 'react'

const TopCitiesItem = ({post}) => {
  return (
    <div className='mt-10 mb-10  pt-5 mr-10    '> 

        <div className='border p-5 rounded-md hover:shadow-lg hover:underline ' >
         {/* this is an svg icon   */}
         <div dangerouslySetInnerHTML={{ __html: post.img }} 
            className='h-[80px] w-[100px]'
         />

           <p className='mt-5'> 
               {post.name}
           </p>
        </div>
       
    </div>
  )
}

export default TopCitiesItem