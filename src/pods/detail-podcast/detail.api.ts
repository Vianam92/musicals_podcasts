import { IdRequest } from "../../common/model/detail.vm";

const cors = "https://cors-anywhere.herokuapp.com/";
const URL = "https://itunes.apple.com/lookup?id=";
const queryParams = "&entity=podcastEpisode";

export class DetailService {
  async getDetailApiService({ podcastId }: IdRequest) {
    return fetch(`${cors}${URL}${podcastId}${queryParams}`).then(
      (response) => response.json()
    );
  }
}
