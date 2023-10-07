import { IdRequest } from "../../model/detail.vm";

const cors = "https://cors-anywhere.herokuapp.com/";

export class DetailService {
  async getDetailApiService({ podcastId }: IdRequest) {
    return fetch(`${cors}https://itunes.apple.com/lookup?id=${podcastId}`).then(
      (response) => response.json()
    );
  }
}
