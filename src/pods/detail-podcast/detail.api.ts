const cors = "https://cors-anywhere.herokuapp.com/";

export class DetailService {
  async getDetailApiService({ podcastId }: any) {
    return fetch(`${cors}https://itunes.apple.com/lookup?id=${podcastId}`).then(
      (response) => response.json()
    );
  }
}
