import React, { useState } from "react";

function Video({ video }) {
  const [showVideo, setShowVideo] = React.useState(true);
  const [votes, setVotes] = React.useState(0);
  return showVideo ? (
    <div>
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
      </div>
      <p>Votes: {votes}</p>
      <button onClick={() => setVotes(votes + 1)}>+</button><button onClick={() => setVotes(votes - 1)}>-</button>
      <button onClick={() => setShowVideo(false)}>Hide</button>
    </div>
  ) : null;
}
export default Video;
