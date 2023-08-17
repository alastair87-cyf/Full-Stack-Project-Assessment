import "./App.css";

import VideoList from "./components/VideoList";

import videoData from "./exampleresponse.json";

import React, { useState } from "react";

function Video ({ id, title, url, rating }) { 
  const splitVideoEmbedId = url => url.split("watch?v=").pop();
  this.id = id;
  this.title = title;
  this.url = url;
  this.rating = rating;
  this.embedId = splitVideoEmbedId(url);
  this.votes = 0;
  this.show = true;
}

const loadVideoData = videoData => videoData.map(video => new Video(video));

function App() {
  const [videos, setVideos] = useState(loadVideoData(videoData));
  // console.log(videos);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <VideoList videos={videos} setVideos={setVideos} />
    </div>
  );
}

export default App;
