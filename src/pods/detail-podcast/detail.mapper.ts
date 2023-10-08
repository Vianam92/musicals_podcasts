import { DetailData, DetailResult } from "../../model/detail.vm";

const mapPodcastFromApi = (podcast: DetailData) => ({
  id: podcast.trackId,
  artwork: podcast.artworkUrl600,
  name: podcast.trackName,
  feedUrl: podcast.feedUrl,
  artist: podcast.artistName,
});

const mapPodcastCollectionFromApi = (podcastCollection: DetailResult) =>
  podcastCollection.results.map((collection: DetailData) =>
    mapPodcastFromApi(collection)
  );

export default mapPodcastCollectionFromApi;
