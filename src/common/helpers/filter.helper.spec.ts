import { filterPodcast } from "./filter.helper";
import { List } from "../model/list.vm";

describe('common/helpers/filter.helpers specs', () => {
    describe('filterByPodcasts', () => {
      it('should return empty array when it feeds collection equals undefined', () => {
 
        const podcast: List[] = [];
        const podcastSearch = "";
  
        const result = filterPodcast(podcast, podcastSearch);
  
        expect(result).toEqual([]);
      });
    });
    it('should return array with the search', () => {
 
        const podcast: List[] = [{
            id: "1",
            artist: "The Joe",
            image: "",
            title: "The Joe"
        },
        {
            id: "2",
            artist: "The Band Locura",
            image: "Lorem image",
            title: "The Band Locura"
        }];

        const getPodcast = [{
            id: "1",
            artist: "The Joe",
            image: "",
            title: "The Joe" 
        }];

        const podcastSearch = "joe";
  
        const result = filterPodcast(podcast, podcastSearch);
  
        expect(result).toEqual(getPodcast);
      });
    });