import React from 'react'

const VideoBackground = () => {
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      src="https://www.youtube.com/embed/90IxM5XRPAE?si=dDBge2K3yzLstZ8M&autoplay=1&mute=1" 
      title="YouTube video player" 
      frameBorder="0" 
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground
