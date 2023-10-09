
export class EpisodesService {
  async getEpisodesApiService({ detail }: any) {
    console.log(detail)
    const feed = await `${detail}`
    return feed;
  }
}
