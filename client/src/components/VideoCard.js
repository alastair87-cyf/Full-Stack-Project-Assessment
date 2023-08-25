import React, { useState } from "react";

function VideoCard({ video }) {
  const [cardVideo, setCardVideo] = useState(video);

  return cardVideo.shown ? (
    <div>
      <div>
        <h1>{cardVideo.title}</h1>
        <iframe
          title={cardVideo.title}
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + cardVideo.embedId}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Votes: {cardVideo.votes}</p>
      <button
        onClick={() => setCardVideo({ ...cardVideo, votes: cardVideo.votes + 1 })}
      >
        +
      </button>
      <button
        onClick={() => setCardVideo({ ...cardVideo, votes: cardVideo.votes - 1 })}
      >
        -
      </button>
      <button onClick={() => setCardVideo({ ...cardVideo, shown: false })}>
        Hide
      </button>
    </div>
  ) : null;
}
export default VideoCard;
