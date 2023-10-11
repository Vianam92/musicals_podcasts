import { Data, Detail, IdRequest } from "../model/detail.vm";
import { List } from "../model/list.vm";

export const filterPodcast = (podcast: List[], podcastSearch: string) => {
    return Array.isArray(podcast) ? podcast.filter(
      (pods) =>
        pods.artist.toLowerCase().includes(podcastSearch) ||
        pods.title.toLowerCase().includes(podcastSearch)
    ): [];
  };

  //TODO poner type and refactor
export const newDataFilter = (podcast: List[], detail: Detail[]) => {
  let ids = new Set();
  detail.filter((item:Detail) => ids.add(item.id));
  let newIds = Array.from(ids);
  let newDetail: any = [];
  let newPodcast:any=[];
  newIds.map((id: any) => newPodcast.push(podcast.find((item:any) => item.id === id.toString())))
  newIds.map((id: any) => newDetail.push(detail.find((item:any) => item.id === id)))
  let addSummary: any = [];
  newPodcast.filter((item: any) => newDetail.filter((data: any) => addSummary.push({ ...data, summary: item.summary })));

  let newEpisodes: any = [];
  newIds.map((id: any) => newEpisodes.push(detail.filter((item:any) => item.idTrack !== id)))

  return {addSummary, newEpisodes};
}

export const findEpisode = (episodes: Data[], {episodeId}: IdRequest) => {
  let newEpisode: Data[] = [];
  episodes.map((episode: any) => newEpisode.push(episode.find((value: Data) => value.idTrack === Number(episodeId))));
  return newEpisode;
};