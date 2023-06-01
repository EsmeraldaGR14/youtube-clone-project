import React from "react";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import fetchApi from "../api/Api";
import "./SearchBar.css";
import "./fetchResults.css";

function Home() {
  const [searchquery, setSearchQuery] = useState("");
  // searchquery is what is put in the search bar
  const [status, setStatus] = useState(false);
  // status is for the status of the api
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  // searchResultsArray are all of the details of each youtube video put in an array so that we can iterate through it
  const [message, setMessage] = useState(false);
  // message is being used to check whether or not it requires a "no search yet" message

  /**
   * Executes a side effect to fetch videos when the search query changes or when the component mounts.
   * If the search query is not empty, it calls the fetchVideos() function to perform the API request.
   */

  useEffect(() => {
    if (searchquery) {
      fetchVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  /**
   * Fetches videos from the API based on the search query and updates the state variables.
   */

  async function fetchVideos() {
    try {
      let result = await fetchApi({
        method: "get",
        resource: `${searchquery}`,
      });

      if (searchquery.length !== 0) {
        if (result.status === 200) {
          setStatus(false);
        } else {
          setStatus(true);
        }
      }

      setSearchResultsArray(result.data.items);
      console.log(result.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Toggles the status state variable to close the modal.
   */
  function toggleModal() {
    setStatus(false);
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
      {/* {status &&  */}
      {status && <Modal status={status} toggleModal={toggleModal} />}
      {/* } */}
    </>
  );
}

export default Home;
