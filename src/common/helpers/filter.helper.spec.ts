import { filterPodcast, findPods, newIdsPods } from "./filter.helper";
import { List } from "../model/list.vm";
import { DetailMapper } from "../model/detail.vm";

describe("common/helpers/filter.helpers specs", () => {
  describe("filterByPodcasts", () => {
    it("should return empty array when it feeds collection equals undefined", () => {
      const podcast: List[] = [];
      const podcastSearch = "";

      const result = filterPodcast(podcast, podcastSearch);

      expect(result).toEqual([]);
    });
    it("should return array with the search", () => {
      const podcast: List[] = [
        {
          id: "1",
          artist: "The Joe",
          image: "",
          title: "The Joe",
        },
        {
          id: "2",
          artist: "The Band Locura",
          image: "Lorem image",
          title: "The Band Locura",
        },
      ];

      const getPodcast = [
        {
          id: "1",
          artist: "The Joe",
          image: "",
          title: "The Joe",
        },
      ];

      const podcastSearch = "joe";

      const result = filterPodcast(podcast, podcastSearch);

      expect(result).toEqual(getPodcast);
    });
  });

  describe("findPods", () => {
    it("should return podcast detail", () => {
      const podcast: List[] = [
        {
          id: "1",
          artist: "The Joe",
          image: "",
          title: "The Joe",
        },
        {
          id: "2",
          artist: "The Band Locura",
          image: "Lorem image",
          title: "The Band Locura",
        },
      ];

      const newIds = [2];

      const newPodcast = [
        {
          id: "2",
          artist: "The Band Locura",
          image: "Lorem image",
          title: "The Band Locura",
        },
      ];

      const result = findPods(newIds, podcast);

      expect(result).toEqual(newPodcast);
    });
  });
  describe("newIdsPods", () => {
    it("should return number array", () => {
      const detail: DetailMapper[] = [
        {
          id: 1,
          artwork: "",
          artist: "The Joe",
          trackName: "The Joe",
          summary: "",
          idTrack: "",
          url: "",
          date: "25/2/2011",
          description: "Lorem ipsun",
        },
      ];

      const newIds = [1];

      const result = newIdsPods(detail);

      expect(result).toEqual(newIds);
    });
  });
});
