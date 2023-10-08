import { ListService } from "./list.api";
import mapPodcastCollectionFromApi from "./list.mapper";
import { List } from "../../model/list.vm";

export class ListRepository {
  async execute(): Promise<List[]> {
    const getListRepository = new ListService();
    const listData = await getListRepository.getlistApiService();
    return mapPodcastCollectionFromApi(listData.feed);
  }
}
