import { IdRequest } from "../../model/detail.vm";

const cors = "https://allorigins.win/";

export class DetailService {
  async getDetailApiService({ podcastId }: IdRequest) {
    return fetch(`${cors}https://itunes.apple.com/lookup?id=${podcastId}`).then(
      (response) => response.json()
    );
  }
}
