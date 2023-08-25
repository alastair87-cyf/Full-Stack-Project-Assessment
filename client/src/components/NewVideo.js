import React, { useState } from "react";

function NewVideo(videos, setVideos, Video) {
  return <div>
    <form>
      <label>
        Title:
        <input type="text"></input>
      </label>
      <label>
        Url:
        <input type="text"></input>
      </label>
      <input type="submit"/>
    </form>
    {/* {setVideos([...videos, new Video(videos[0])])} */}
  </div>;
}

export default NewVideo;
