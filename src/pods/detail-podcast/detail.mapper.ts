import { DetailData, DetailResult } from "../../common/model/detail.vm";

const mapPodcastFromApi = (podcast: DetailData) => ({
  id: podcast.collectionId,
  idTrack: podcast.trackId,
  artwork: podcast.artworkUrl600,
  artist: podcast.artistName ? podcast.artistName : "",
  trackName: podcast.trackName,
  date: podcast.releaseDate,
  url: podcast.previewUrl,
  description: podcast.description ? podcast.description: ""
});

const mapPodcastCollectionFromApi = (podcastCollection: DetailResult) => 
  podcastCollection.results.map((collection: DetailData) =>
    mapPodcastFromApi(collection)
  );

export default mapPodcastCollectionFromApi;
