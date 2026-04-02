// import React from 'react'
// import { CiPlay1 } from "react-icons/ci";
// import { CiCircleInfo } from "react-icons/ci";
// const VideoTitle = ({title, overview}) => {
//   return (
//     <div className='w-[vw] absolute text-white pt-[18%] p-12'>
//       <h1 className='text-3xl font-bold'>{title}</h1>
//       <p className='w-1/3 mt-4'>{overview}</p>
//       <div className='mt-8 flex gap-2'>
//         <button className='px-6 flex items-center py-2 bg-gray-500 hover:opacity-80 text-black rounded-md cursor-pointer'><CiPlay1 /><span>Play</span></button>
//         <button className='px-6 flex items-center py-2 bg-gray-500 hover:opacity-50 text-black rounded-md cursor-pointer'><CiCircleInfo size={24} /><span>Watch more</span></button>
        
//       </div>
//     </div>
//   )
// }

// export default VideoTitle

import React from "react";
import { CiPlay1, CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 sm:px-8 md:px-10 lg:px-10 top-20 text-white">
      
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
        {title}
      </h1>

      <p className="mt-3 text-sm sm:text-base md:text-lg max-w-md md:max-w-xl lg:max-w-2xl line-clamp-3">
        {overview}
      </p>

      <div className="mt-5 flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md">
          <CiPlay1 />
          Play
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-gray-500/70 rounded-md">
          <CiCircleInfo />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;