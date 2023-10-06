import { DetailService } from "./detail.api";
import mapPodcastCollectionFromApi from "./detail.mapper";
import {IdRequest } from "../../model/detail.vm";
import { Feed } from "../../model/list.vm";

export class DetailRepository {
  async execute({podcastId}: IdRequest): Promise<Feed> {
    const getDetailRepository = new DetailService();
    const detailData = await getDetailRepository.getDetailApiService({podcastId});
    return mapPodcastCollectionFromApi(detailData);
  }
}
