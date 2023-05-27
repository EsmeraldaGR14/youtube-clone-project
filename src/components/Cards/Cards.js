import React from "react";
import Card from "../Card/Card";

function Cards({ searchResultsArray }) {
  return (
    <div className="videoList">
      <Card searchResultsArray={searchResultsArray} />
    </div>
  );
}

export default Cards;
