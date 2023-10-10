import {  EpisodesService } from "./episodes.api";
import mapPodcastCollectionFromApi from "./episodes.mapper";
const cheerio = require('cheerio');


interface Request {
  detail: any
}

export class EpisodesRepository {
  async execute({detail}: any): Promise<any> {
    const getEpisodesRepository = new EpisodesService();
    const detailData = await getEpisodesRepository.getEpisodesApiService({detail});
    return cheerio.load(detailData)
  }
}
