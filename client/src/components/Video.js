import React, { useState } from "react";

function Video({ video }) {
  const [showVideo, setShowVideo] = React.useState(true);
  return showVideo ? (
    <div>
      <h1>{video.title}</h1>
      <iframe
        title={video.title}
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + video.embedId}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>Votes: {video.votes}</p>
      <button onClick={() => setShowVideo(false)}>Hide</button>
    </div>
  ) : null;
}
export default Video;
