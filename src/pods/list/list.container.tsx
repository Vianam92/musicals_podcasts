import { useContext, useEffect } from "react";
import ListComponent from "./list.component";
import PropTypes from "prop-types";
import { List, Search } from "../../common/model/list.vm";
import { UseContextGeneral } from "../../core/useContext/useContext";
import { filterPodcast } from "../../common/helpers/filter.helper";
import { listRepository } from "./list.repository";
import { datefinally, hoursUtil } from "../../common/utils/utils";
import UseContextLoader from "../../core/useContext/useLoader";
import UseContextTime from "../../core/useContext/useTime";
import ls from "../../common/local-storage.ts/localStorage";

const ListContainer = ({ podcastSearch }: Search) => {
  const {
    podcast, setPodcast
  } = useContext(UseContextGeneral);
  const {setIsLoader} = useContext(UseContextLoader);
  const {isTime, setIsTime,timeStampList, setTimesTampList} = useContext(UseContextTime);

  useEffect(() => {
    setIsLoader(true);
    async function startFetching() {
       const response = await listRepository();
        if (response || isTime) {
          setTimesTampList(hoursUtil());
          ls.set("podcast", { value: response, time: hoursUtil() });
          setPodcast(response);
          setIsTime(datefinally(timeStampList));
          setIsLoader(false);
        }
    }
    startFetching();
  }, [isTime]);

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
  podcastSearch: PropTypes.string,
};

export default ListContainer;
