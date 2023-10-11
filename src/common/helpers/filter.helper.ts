import { Data, Detail, IdRequest } from "../model/detail.vm";
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
  
  const newIdsPods = (detail: Data[]) => {
    let ids = new Set();
    detail.filter((item: Detail) => ids.add(item.id));
    let newIds = Array.from(ids);
    return newIds;
  };
  
  const addSummary = (detail: Data[], podcast: List[]) => {
    console.log(findPods(newIdsPods(detail), podcast));
    let addSummary: any = [];
    let newDetail: any = [];
    newIdsPods(detail).map((id: any) => newDetail.push(detail.find((item:any) => item.id === id)))
    findPods(newIdsPods(detail), podcast).filter((item: any) =>
    newDetail.filter((data: any) =>
        addSummary.push({ ...data, summary: item.summary })
      )
    );
    return addSummary;
  };
  
  const getEpisodes = (detail: Data[]) => {
    let newEpisodes: any = [];
    newIdsPods(detail).map((id: any) =>
      newEpisodes.push(detail.filter((item: any) => item.idTrack !== id))
    );
    return newEpisodes;
  };
  
  export const newDataFilter = (podcast: List[], detail: Data[]) => {
    const summary = addSummary(detail, podcast);
    const episodes = getEpisodes(detail);
    console.log(summary);
  
    return { summary, episodes };
  };

export const findEpisode = (episodes: Data[], {episodeId}: IdRequest) => {
  let newEpisode: Data[] = [];
  const id = Number(episodeId);
  episodes.map((episode: any) => newEpisode.push(episode.find((value: Data) => value.idTrack === id)));
  return newEpisode;
};