import { IdRequest } from "../../model/detail.vm";
import {  EpisodesService } from "./episodes.api";
import mapPodcastCollectionFromApi from "./episodes.mapper";

export class EpisodesRepository {
  async execute({podcastId}: IdRequest): Promise<any> {
    const getEpisodesRepository = new EpisodesService();
    const detailData = await getEpisodesRepository.getEpisodesApiService({ podcastId });
    console.log('rep', detailData);
  }
}
