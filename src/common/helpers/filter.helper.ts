import { Detail, Episodes, IdEpisodeRequest } from "../model/detail.vm";
import { List } from "../model/list.vm";

export const filterPodcast = (podcast: List[], podcastSearch: string) => {
    return Array.isArray(podcast) ? podcast.filter(
      (pods) =>
        pods.artist.toLowerCase().includes(podcastSearch) ||
        pods.title.toLowerCase().includes(podcastSearch)
    ): [];
  };

  const findPods = (newIds: any, podcast: List[]) => {
    let newPodcast: any = [];
    newIds.map((id: []) =>
      newPodcast.push(podcast.find((item: List) => item.id === id.toString()))
    );
    return newPodcast;
  };
  
  const newIdsPods = (detail: Detail[]) => {
    let ids = new Set();
    detail.filter((item: Detail) => ids.add(item.id));
    let newIds = Array.from(ids);
    return newIds;
  };
  
  const addSummary = (detail: Detail[], podcast: List[]) => {
    let addSummary: any = [];
    let newDetail: any = [];
    newIdsPods(detail).map((id: any) => newDetail.push(detail.find((item:Detail) => item.id === id)))
    findPods(newIdsPods(detail), podcast).filter((item: any) =>
    newDetail.filter((data: Detail) =>
        addSummary.push({ ...data, summary: item.summary })
      )
    );
    return addSummary;
  };
  
  const getEpisodes = (detail: Detail[]) => {
    let newEpisodes: any = [];
    newIdsPods(detail).map((id: any) =>
      newEpisodes.push(detail.filter((item: any) => item.idTrack !== id))
    );
    return newEpisodes.flat();
  };
  
  export const newDataFilter = (podcast: List[], detail: any) => {
    const summary = addSummary(detail, podcast);
    const episodes = getEpisodes(detail);
  
    return { summary, episodes };
  };

export const findEpisode = (episodes: Episodes[], {episodeId}: IdEpisodeRequest) => {
  let newEpisode: Episodes[] = [];
  const id = Number(episodeId);
  const findId: any = episodes.find((value: Episodes) => value.idTrack === id)
  newEpisode.push(findId);
  return newEpisode;
};