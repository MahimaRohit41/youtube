import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState("");

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);  
    setVideos(json.items);
  }

  return (
    videos && <div className='flex flex-wrap'>
      {
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer