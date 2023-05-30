import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

function Home() {
  // const [data, setData] = useState();
  // const [video, setVideo] = useState();
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   try {
  //     const result = await axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet`
  //     );

  //     console.log(result.data);
  //     setData(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // console.log(data);
  return (
    <>
      <div>Home</div>
      <SearchBar />
    </>
  );
}

export default Home;
