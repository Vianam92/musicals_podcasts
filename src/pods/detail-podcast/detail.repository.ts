import { DetailService } from "./detail.api";
import mapPodcastCollectionFromApi from "./detail.mapper";
import { Data, IdRequest } from "../../common/model/detail.vm";

export class DetailRepository {
  async execute({podcastId}: IdRequest): Promise<Data[]> {
    const getDetailRepository = new DetailService();
    const detailData = await getDetailRepository.getDetailApiService({podcastId});
    return mapPodcastCollectionFromApi(detailData);
  }
}
