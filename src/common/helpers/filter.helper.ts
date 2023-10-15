import {
  Detail,
  DetailMapper,
  Episodes,
  IdEpisodeRequest,
} from "../model/detail.vm";
import { List } from "../model/list.vm";

export const filterPodcast = (podcast: List[], podcastSearch: string) => {
  return Array.isArray(podcast)
    ? podcast.filter(
        (pods) =>
          pods.artist.toLowerCase().includes(podcastSearch) ||
          pods.title.toLowerCase().includes(podcastSearch)
      )
    : [];
};

export const findPods = (newIds: any, podcast: List[]) => {
  let newPodcast: any = [];
  newIds.map((id: []) =>
    newPodcast.push(podcast.find((item: List) => item.id === id.toString()))
  );
  return newPodcast;
};

export const newIdsPods = (detail: DetailMapper[]) => {
  let ids = new Set();
  detail.filter((item: DetailMapper) => ids.add(item.id));
  let newIds = Array.from(ids);
  return newIds;
};

export const addSummary = (detail: DetailMapper[], podcast: List[]) => {
  let addSummary: Detail[] = [];
  let newDetail: any = [];
  newIdsPods(detail).map((id: any) =>
    newDetail.push(detail.find((item: any) => item.id === id))
  );
  findPods(newIdsPods(detail), podcast).filter((item: Detail) =>
    newDetail.filter((data: Detail) =>
      addSummary.push({ ...data, summary: item.summary })
    )
  );
  return addSummary.map((summary: Detail) => ({
    artist: summary.artist,
    artwork: summary.artwork,
    date: summary.date,
    id: summary.id,
    idTrack: summary.idTrack,
    summary: summary.summary,
    trackName: summary.trackName,
  }));
};

export const getEpisodes = (detail: DetailMapper[]) => {
  let newEpisodes: any = [];
  newIdsPods(detail).map((id: any) =>
    newEpisodes.push(detail.filter((item: any) => item.idTrack !== id))
  );
  return newEpisodes.flat().map((episodes: Episodes) => ({
    id: episodes.id,
    artwork: episodes.artwork,
    date: episodes.date,
    idTrack: episodes.idTrack,
    description: episodes.description,
    trackName: episodes.trackName,
    url: episodes.url,
  }));
};

export const newDataFilter = (podcast: List[], detail: DetailMapper[]) => {
  const summary = addSummary(detail, podcast);
  const episodes = getEpisodes(detail);

  return { summary, episodes };
};

export const findEpisode = (
  episodes: Episodes[],
  { episodeId }: IdEpisodeRequest
) => {
  let newEpisode: Episodes[] = [];
  const id = Number(episodeId);
  const findId: any = episodes.find((value: Episodes) => value.idTrack === id);
  newEpisode.push(findId);
  return newEpisode;
};
