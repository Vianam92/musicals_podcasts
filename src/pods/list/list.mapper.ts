import { Entry, Feed } from "../../model/list.vm";

export const mapPodcastFromApi = (podcast: Entry) => ({
    id: podcast.id.attributes["im:id"],
    artist: podcast["im:artist"].label,
    image: podcast["im:image"][2].label,
    title: podcast["im:name"].label,
    summary: podcast.summary.label,
  });

const mapPodcastCollectionFromApi = (podcastCollection: Feed) =>
podcastCollection.entry.map((collection: Entry) => mapPodcastFromApi(collection));

export default mapPodcastCollectionFromApi;