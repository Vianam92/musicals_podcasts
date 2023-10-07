import { DetailService } from "./detail.api";
import mapPodcastCollectionFromApi from "./detail.mapper";
import {DetailData, IdRequest } from "../../model/detail.vm";

export class DetailRepository {
  async execute({podcastId}: IdRequest): Promise<DetailData[]> {
    const getDetailRepository = new DetailService();
    const detailData = await getDetailRepository.getDetailApiService({podcastId});
    return mapPodcastCollectionFromApi(detailData);
  }
}
