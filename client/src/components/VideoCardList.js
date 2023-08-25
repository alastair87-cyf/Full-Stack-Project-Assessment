import React from "react";
import VideoCard from "./VideoCard";

const VideoCardList = ({ videos }) => (
  <div>
    {videos.map((video) => (
      <VideoCard video={video} />
    ))}
  </div>
);

export default VideoCardList;
