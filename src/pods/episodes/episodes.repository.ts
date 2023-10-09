import {  EpisodesService } from "./episodes.api";
import mapPodcastCollectionFromApi from "./episodes.mapper";

interface Request {
  detail: any
}

export class EpisodesRepository {
  async execute({detail}: any): Promise<any> {
    console.log("repo", detail)
    const getEpisodesRepository = new EpisodesService();
    const detailData = await getEpisodesRepository.getEpisodesApiService({detail});
    console.log(detailData)
  }
}
