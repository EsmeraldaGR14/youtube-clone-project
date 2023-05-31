import React from "react";
import { useState } from "react";

function SingleVideoLayout({ playVideo }) {
  const [showMore, setshowMore] = useState(false);

  return (
    <>
      <div>
        {playVideo.map((item) => {
          return (
            <div key={item.id} className="play-video-card">
              <h3 className="video-title">{item.snippet.title}</h3>
              <div className="details">
                <h5>{item.snippet.channelTitle}</h5>
                <p>
                  {showMore
                    ? item.snippet.description
                    : item.snippet.description.slice(0, 300)}

                  <button onClick={() => setshowMore(!showMore)}>
                    {showMore ? "\u00A0Show less" : "...Show more"}
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SingleVideoLayout;
