import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchApi from "../api/Api";
import SingleVideoLayout from "../VideoLayout/SingleVideoLayout";
import "./SingleVideo.css";

function SingleVideo() {
  const { videoId } = useParams();
  const [playVideo, setPlayVideo] = useState([]);

  useEffect(() => {
    fetchSingleVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  async function fetchSingleVideo() {
    try {
      let result = await fetchApi({
        method: "get",
        videoResource: `${videoId}`,
      });

      console.log(result.data.items);
      setPlayVideo(result.data.items);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="play_video_section">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        width="800"
        height="500"
        title="video-play"
      >
        {" "}
      </iframe>
      <SingleVideoLayout playVideo={playVideo} />
    </div>
  );
}

export default SingleVideo;
