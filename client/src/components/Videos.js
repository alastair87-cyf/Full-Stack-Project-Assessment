import React from "react";
import Video from "./Video";

const Videos = ({ videos, setVideos }) => (
  <div>
    {videos.map((video) => (
      <Video video={video} />
    ))}
  </div>
);

export default Videos;
