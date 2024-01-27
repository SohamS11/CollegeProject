import React from 'react';

const TopCitiesItem = ({ post }) => {
  return (
    <div className={'w-full h-auto flex flex-col flex-wrap mt-10 mb-10 p-5 mr-10'}>
      <div className='border p-5 rounded-md hover:shadow-lg hover:underline h-[100px] w-[100px]'>
        {/* this is an svg icon */}
        
        <div
          dangerouslySetInnerHTML={{ __html: post.img }}
          className=''
        />

        {/* icon name */}
        <div >
          <p className=''>{post.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCitiesItem;
