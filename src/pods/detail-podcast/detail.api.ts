import { IdRequest } from "../../common/model/detail.vm";
const cors = "https://cors-anywhere.herokuapp.com/";
const URL = "https://itunes.apple.com/lookup?id=";
const queryParams = "&entity=podcastEpisode";

export const detailService = async ({ podcastId }: IdRequest) => {
  try {
    const response = await fetch(`${cors}${URL}${podcastId}${queryParams}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
