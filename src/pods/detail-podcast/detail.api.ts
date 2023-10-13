import { IdRequest } from "../../common/model/detail.vm";
const cors = "https://api.allorigins.win/raw?url=";
const URL = "https://itunes.apple.com/lookup?id=";
const queryParams = "&entity=podcastEpisode";

export const detailService = async ({ podcastId }: IdRequest) => {
  let response = null;
  try {
    response = await fetch(`${URL}${podcastId}${queryParams}`);
  } catch (error) {
    response = await fetch(`${cors}${encodeURIComponent(
      `${URL}${podcastId}${queryParams}`
      )}`);
  }
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
