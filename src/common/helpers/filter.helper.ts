import { List } from "../model/list.vm";


export const filterPodcast = (podcast: List[], podcastSearch: string) => {
    return Array.isArray(podcast) ? podcast.filter(
      (pods) =>
        pods.artist.toLowerCase().includes(podcastSearch) ||
        pods.title.toLowerCase().includes(podcastSearch)
    ): [];
  };