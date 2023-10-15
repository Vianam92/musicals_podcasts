import {
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

export const findPods = (newIds: number[], podcast: List[]) => {
  let newPodcast: List[] = [];
  newIds.map((id: number) => {
    const founId = podcast.find((item: List) => item.id === id.toString());
    if (founId) {
      newPodcast.push(founId);
    }
  });
  return newPodcast;
};

export const newIdsPods = (detail: DetailMapper[]) => {
  let ids = new Set<any>();
  detail.filter((item: DetailMapper) => ids.add(item.id));
  const newIds = Array.from(ids);
  return newIds;
};

export const addSummary = (detail: DetailMapper[], podcast: List[]) => {
  let addSummary: DetailMapper[] = [];
  let newDetail: DetailMapper[] = [];
  const newIds: number[] = newIdsPods(detail);
  newIds.map((id: number) => {
    const findId = detail.find((item: DetailMapper) => item.id === id);
    if (findId) {
      newDetail.push(findId);
    }
  });
  const matchingDetail = findPods(newIds, podcast);
  matchingDetail.filter((item) => {
    newDetail.filter((data) => {
      addSummary.push({ ...data, summary: item.summary });
    });
  });
  return addSummary.map((summary: DetailMapper) => ({
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
  let newEpisodes: DetailMapper[] = [];
  const newIds: number[] = newIdsPods(detail);
  newIds.map((id: number) => {
    const findId: DetailMapper[] = detail.filter(
      (item: DetailMapper) => item.idTrack !== id
    );
    if (findId.length > 0) {
      newEpisodes.push(...findId);
    }
  });
  return newEpisodes.flat().map((episodes: DetailMapper) => ({
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
  const findId = episodes.find((value: Episodes) => value.idTrack === id);
  if (findId) {
    newEpisode.push(findId);
  }
  return newEpisode;
};
