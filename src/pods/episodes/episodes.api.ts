const cors = "https://cors-anywhere.herokuapp.com/";
let XMLParser = require('react-xml-parser');

export class EpisodesService {
  async getEpisodesApiService({ detail }: any) {
    return fetch((`${cors}https://feed.songexploder.net/SongExploder`)).then(
      (response) => response.text()
    );
  }
}
