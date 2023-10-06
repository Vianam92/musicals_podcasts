import { Feed } from "../../model/list.vm";

const mapPodcastFromApi = (podcast: any) => ({
    id: podcast.id.attributes["im:id"],
    artist: podcast["im:artist"].label,
    image: podcast["im:image"][2].label,
    title: podcast["im:name"].label,
  });

const mapPodcastCollectionFromApi = (podcastCollection: any) =>
podcastCollection.entry.map((collection: Feed[]) => mapPodcastFromApi(collection));

export default mapPodcastCollectionFromApi;