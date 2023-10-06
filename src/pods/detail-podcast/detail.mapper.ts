import { Feed } from "../../model/list.vm";

const mapPodcastFromApi = (podcast: any) => ({
  id: podcast.trackId,
  artwork: podcast.artworkUrl600,
  name: podcast.trackName,
  feedUrl: podcast.feedUrl,
  artist: podcast.artistName,
});

const mapPodcastCollectionFromApi = (podcastCollection: any) =>
  podcastCollection.results.map((collection: Feed[]) =>
    mapPodcastFromApi(collection)
  );

export default mapPodcastCollectionFromApi;
