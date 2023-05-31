import React from "react";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import fetchApi from "../api/Api";
import "./SearchBar.css";
import "./fetchResults.css";

function Home() {
  const [searchquery, setSearchQuery] = useState("");
  const [status, setStatus] = useState(false);
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (searchquery) {
      fetchVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchVideos() {
    if (searchquery !== "") {
      try {
        let result = await fetchApi({
          method: "get",
          resource: `${searchquery}`,
        });

        if (result.status === 200) {
          setStatus(false); //false
        } else {
          setStatus(true);
          console.log(result);
          // alert(" 404: TRY AGAIN! API DOES NOT WORK");
        }

        setSearchResultsArray(result.data.items);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

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
      {/* {status &&  */}
      <Modal status={status} toggleModal={toggleModal} />
      {/* } */}
    </>
  );
}

export default Home;
