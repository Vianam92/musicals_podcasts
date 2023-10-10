import { IdRequest } from "../../model/detail.vm";

const cors = "https://cors-anywhere.herokuapp.com/";
const URL = "https://itunes.apple.com/lookup?id=";
const queryParams = "&entity=podcastEpisode";
export class EpisodesService {
  async getEpisodesApiService({podcastId}: IdRequest) {
    return fetch((`${cors}${URL}${podcastId}${queryParams}`)).then(
      (response) => response.json()
    );
  }
}

/*export class EpisodesService {
  async getEpisodesApiService({ podcastId }: IdRequest) {
    console.log(podcastId)
    const proxiedUrl = `${cors}https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`;
    try {
      const response = await fetch(proxiedUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
}*/

