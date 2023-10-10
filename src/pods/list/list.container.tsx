import { useContext } from "react";
import ListComponent from "./list.component";
import PropTypes from "prop-types";
import { List, Search } from "../../common/model/list.vm";
import { UseContextGeneral } from "../../core/useContext/useContext";
import { filterPodcast } from "../../common/helpers/filter.helper";


const ListContainer = ({ podcastSearch }: Search) => {
  const {
    podcast,
  } = useContext(UseContextGeneral);

  return (
    <>
      {filterPodcast(podcast, podcastSearch).map((pod: List) => (
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
  value: PropTypes.string,
};

export default ListContainer;
