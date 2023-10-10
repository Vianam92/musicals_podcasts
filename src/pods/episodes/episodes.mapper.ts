
export const mapPodcastFromApi = (episode: any) => ({
  id: episode.guid,
  title: episode.title,
  date: episode.pubDate,
  duration: episode.itunes.duration,
  content: episode.content,
  url: episode.enclosure.url,
});

const mapPodcastCollectionFromApi = (podcastCollection: any) =>
  podcastCollection.results.map((collection: any) =>
    mapPodcastFromApi(collection)
  );

export default mapPodcastCollectionFromApi;
