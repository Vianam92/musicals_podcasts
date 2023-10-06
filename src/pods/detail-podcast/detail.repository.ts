import { DetailService } from "./detail.api";
import mapPodcastCollectionFromApi from "./detail.mapper";
import { Feed } from "../../model/list.vm";

export class DetailRepository {
  async execute({podcastId}: any): Promise<Feed[]> {
    const getDetailRepository = new DetailService();
    const detailData = await getDetailRepository.getDetailApiService({podcastId});
    return mapPodcastCollectionFromApi(detailData);
  }
}
