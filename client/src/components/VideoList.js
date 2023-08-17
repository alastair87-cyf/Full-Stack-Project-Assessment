import React from "react";
import Video from "./Video";

const VideoList = ({ videos, setVideos }) => (
  <div>
    {console.log(videos)}
    {videos
      .filter((video) => video.show)
      .map((video) => (
        <Video video={video} />
      ))}
  </div>
);

export default VideoList;
