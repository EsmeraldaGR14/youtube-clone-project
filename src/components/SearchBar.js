import React, { useState } from "react";
import VideoCards from "./VideoCards";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  function SearchItem(e) {
    console.log(searchValue);
  }

  function SearchValueBar(e) {
    setSearchValue(e.target.value);
  }
  return (
    <>
      <div>SearchBar</div>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={SearchValueBar}
      />
      <button onClick={SearchItem}>Search</button>

      {searchValue && <VideoCards searchValue={searchValue} />}
      {/* Video cards should apply conditional rendering => IF searchValue is not an empty string THEN display videos */}
    </>
  );
}

export default SearchBar;
