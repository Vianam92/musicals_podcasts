import { getlistApiService } from "./list.api";
import mapPodcastCollectionFromApi from "./list.mapper";

export const listRepository = async () => {
    const listData = await getlistApiService();
    return mapPodcastCollectionFromApi(listData.feed);
  }
