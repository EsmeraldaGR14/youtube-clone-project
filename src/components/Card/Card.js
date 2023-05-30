import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ searchResultsArray }) {
  return (
    <>
      {searchResultsArray.map((item) => {
        return (
          <Link
            className="link"
            to={`/videos/${item.id.videoId}`}
            key={item.id.videoId}
          >
            <div className="video-card">
              <img src={item.snippet.thumbnails.high.url} alt="" />

              <h5 className="video-title">{item.snippet.title}</h5>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Card;
