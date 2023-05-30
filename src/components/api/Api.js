import axios from "axios";

async function fetchApi(data) {
  let resource = data.resource ? data.resource : "";
  let videoResource = data.videoResource ? data.videoResource : "";

  let configObj = {};
  if (resource) {
    configObj = {
      ...data,
      url: `${process.env.REACT_APP_YOUTUBE_BASE_URL}&q=${resource}&key=${process.env.REACT_APP_API_KEY}`,
    };
  }
  if (videoResource) {
    configObj = {
      ...data,
      url: `${process.env.REACT_APP_YOUTUBE_SINGLE_VIDEO_URL}?id=${videoResource}&key=${process.env.REACT_APP_API_KEY}&part=snippet`,
    };
  }

  try {
    let result = await axios(configObj);
    return result;
  } catch (error) {
    return error;
  }
}
export default fetchApi;
