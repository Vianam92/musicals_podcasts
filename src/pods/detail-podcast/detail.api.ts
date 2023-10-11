import { IdRequest } from "../../common/model/detail.vm";
//const cors = "https://cors-anywhere.herokuapp.com/";
const cors = "https://api.allorigins.win/raw?url=";
const URL = "https://itunes.apple.com/lookup?id=";
const queryParams = "&entity=podcastEpisode";

export const detailService = async ({ podcastId }: IdRequest) => {
  try {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(
      `${URL}${podcastId}${queryParams}`
     )}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
