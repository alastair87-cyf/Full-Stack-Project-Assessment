import "./App.css";

import Video from "./classes/Video";

import VideoCardList from "./components/VideoCardList";

import VideoAdder from "./components/VideoAdder";

import React, { useState } from "react";

import response from "./exampleresponse.json";

function App() {  
  const [videos, setVideos] = useState(response.map((videoData) => new Video(videoData)));
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <VideoCardList videos={videos} />
      <VideoAdder videos={videos} setVideos={setVideos} />
    </div>
  );
}

export default App;
