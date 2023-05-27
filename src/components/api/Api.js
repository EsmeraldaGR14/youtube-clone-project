import axios from "axios";

async function fetchApi(data) {
  let resource = data.resource ? data.resource : "";
  if (resource !== "") {
    let configObj = {
      ...data,
      url: `${process.env.REACT_APP_YOUTUBE_BASE_URL}&q=${resource}&key=${process.env.REACT_APP_API_KEY}`,
    };
    try {
      let result = await axios(configObj);
      return result;
    } catch (error) {
      return error;
    }
  }
}
export default fetchApi;
