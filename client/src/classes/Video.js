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

  export default Video;