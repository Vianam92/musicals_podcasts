import { detailService } from "./detail.api";
import mapPodcastCollectionFromApi from "./detail.mapper";
import { IdRequest } from "../../common/model/detail.vm";

export const detailRepository = async ({podcastId}: IdRequest) => {
    const detailData = await detailService({podcastId});
    return mapPodcastCollectionFromApi(detailData);
}
