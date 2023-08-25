import "./App.css";

import VideoCardList from "./components/VideoCardList";

import NewVideo from "./components/NewVideo";

import videoData from "./exampleresponse.json";

import React, { useState } from "react";

// function Video ({ id, title, url, rating }) {
//   const splitVideoEmbedId = url => ;
//   this.id = id;
//   this.title = title;
//   this.url = url;
//   this.rating = rating;
//   this.embedId = splitVideoEmbedId(url);
//   // this.votes = 0;
//   // this.show = true;
// }

const Video = class {
  constructor({ id, title, url, rating }) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.rating = rating;
    this.embedId = url.split("watch?v=").pop();
    this.shown = true;
    this.votes = 0;
  }
};

const loadVideoData = (videoData) => videoData.map((video) => new Video(video));

function App() {
  const [videos, setVideos] = useState(loadVideoData(videoData));
  // console.log(videos);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <VideoCardList videos={videos} />
      <NewVideo videos={videos} setVideos={setVideos} videoClass={Video} />
    </div>
  );
}

export default App;
