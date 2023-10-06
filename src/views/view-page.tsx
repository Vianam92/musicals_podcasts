import FilterPodcast from "../pods/filter/filter.podacast";
import ListContainer from "../pods/list/list.container";
import { useState } from "react";

const Home = () => {
  const [podcastSearch, setPodcastSearch] = useState<string>("");

  const handlerInput = (value: string) => {
    setPodcastSearch(value);
  };
  return (
    <div>
      <FilterPodcast
        handlerInput={handlerInput}
        podcastSearch={podcastSearch}
      />
      <ListContainer podcastSearch={podcastSearch} />
    </div>
  );
};

export default Home;
