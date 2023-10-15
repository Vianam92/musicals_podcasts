import { useContext, useEffect } from "react";
import ListComponent from "./list.component";
import PropTypes from "prop-types";
import { List, Search } from "../../common/model/list.vm";
import { UseContextGeneral } from "../../core/useContext/useContext";
import { filterPodcast } from "../../common/helpers/filter.helper";
import UseContextLoader from "../../core/useContext/useLoader";
import UseContextTime from "../../core/useContext/useTime";
import { useList } from "./list.hook";

const ListContainer = ({ podcastSearch }: Search) => {
  const { podcast } = useContext(UseContextGeneral);
  const { setIsLoader } = useContext(UseContextLoader);
  const { isTime } =
    useContext(UseContextTime);
    const {loadList} = useList();

  useEffect(() => {
    setIsLoader(true);
    loadList();
  }, [isTime]);

  return (
    <>
      {filterPodcast(podcast,podcastSearch).map((pod: List) => (
        <ListComponent
          key={pod.id}
          id={pod.id}
          image={pod.image}
          title={pod.title}
          artist={pod.artist}
        />
      ))}
    </>
  );
};

ListContainer.propTypes = {
  podcastSearch: PropTypes.string,
};

export default ListContainer;
