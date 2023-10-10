import FilterPodcast from "../pods/filter/filter.podcast";
import ListContainer from "../pods/list/list.container";
import { useState } from "react";
import SectionLayout from "../layout/center.layout";

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
      <SectionLayout>
      <ListContainer podcastSearch={podcastSearch} />
      </SectionLayout>
    </div>
  );
};

export default Home;
