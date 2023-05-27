import React, { useState, useEffect } from "react";
import axios from "axios";

function VideoVards({ searchValue }) {
  const [videoData, setVideoData] = useState("");

  // AIzaSyAjOxCjIb87zxRpCmeoWPh9DSgcnyesDjo;
  // console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    try {
      let result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&q=${searchValue}`
      );
      setVideoData(result.data);
      console.log(result.data.items[0].snippet.title);
      // console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div>VideoCards</div>
      {/* <div>{videoData}</div> */}
    </>
  );
}

export default VideoVards;
