import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = () => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>Sushant Pal</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam.</p>
      <div className='mt-8 flex gap-2'>
        <button className='px-6 flex items-center py-2 bg-gray-500 hover:opacity-80 text-black rounded-md cursor-pointer'><CiPlay1 /><span>Play</span></button>
        <button className='px-6 flex items-center py-2 bg-gray-500 hover:opacity-50 text-black rounded-md cursor-pointer'><CiCircleInfo size={24} /><span>Watch more</span></button>
        
      </div>
    </div>
  )
}

export default VideoTitle
