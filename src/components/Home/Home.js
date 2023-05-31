import React from "react";
import Cards from "../Cards/Cards";
import { useState } from "react";
import fetchApi from "../api/Api";
import "./SearchBar.css";
import "./fetchResults.css";

function Home() {
  const [searchquery, setSearchQuery] = useState("");
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  const [message, setMessage] = useState(false);

  async function fetchVideos() {
    try {
      let result = await fetchApi({
        method: "get",
        resource: `${searchquery}`,
      });

      setSearchResultsArray(result.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  function handleText(event) {
    const userInput = event.target.value;
    setSearchQuery(userInput);
  }

  function invalidSearch() {
    if (searchquery === "") {
      alert("Search can't be empty");
      setMessage(false);
    } else {
      setMessage(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    invalidSearch();
    fetchVideos();
    setSearchQuery("");
    // setMessage(!message);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="searchArea">
          <input
            onChange={handleText}
            type="text"
            placeholder="Search..."
            value={searchquery}
          />
          <button>Search</button>
        </div>
      </form>
      {message ? (
        <Cards searchResultsArray={searchResultsArray} />
      ) : (
        <h5 className="searchMessage">
          No search Results Yet!, Please submit a search above!
        </h5>
      )}
    </>
  );
}

export default Home;
