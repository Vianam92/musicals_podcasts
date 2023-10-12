import FilterPodcast from "../pods/filter/filter.podcast";
import ListContainer from "../pods/list/list.container";
import { useState, useContext } from "react";
import SectionLayout from "../layout/center.layout";
import UseContextGeneral from "../core/useContext/useContext";

const Home = () => {
  const [podcastSearch, setPodcastSearch] = useState<string>("");
  const { podcast } = useContext(UseContextGeneral);

  const handlerInput = (value: string) => {
    setPodcastSearch(value);
  };
  return (
    <div>
      <FilterPodcast
        podcast={podcast}
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
