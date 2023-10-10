import { DetailData, DetailResult } from "../../model/detail.vm";

const mapPodcastFromApi = (podcast: DetailData) => ({
  id: podcast.collectionId ? podcast.collectionId : podcast.trackId,
  artwork: podcast.artworkUrl600,
  artist: podcast.artistName,
  trackName: podcast.trackName,
  date: podcast.releaseDate,
  url: podcast.previewUrl,
});

const mapPodcastCollectionFromApi = (podcastCollection: DetailResult) =>
  podcastCollection.results.map((collection: DetailData) =>
    mapPodcastFromApi(collection)
  );

export default mapPodcastCollectionFromApi;
