import { ListService } from "./list.api";
import mapPodcastCollectionFromApi from "./list.mapper";
import { Feed } from "../../model/list.vm";

export class ListRepository {
  async execute(): Promise<Feed[]> {
    const getListRepository = new ListService();
    const listData = await getListRepository.getlistApiService();
    return mapPodcastCollectionFromApi(listData.feed);
  }
}
