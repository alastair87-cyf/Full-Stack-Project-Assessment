import "./App.css";

import VideoList from "./components/VideoList";

import exampleResponse from "./exampleresponse.json";

import React, { useState } from "react";

function App() {
  const [videos, setVideos] = useState(exampleResponse);
  console.log(videos);
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
