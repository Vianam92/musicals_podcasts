import React, { useState, useEffect, useContext } from "react";
import { ListRepository } from "./list.repository";
import ListComponent from "./list.component";
import PropTypes from "prop-types";
import { List } from "../../common/model/list.vm";
import { UseContextGeneral } from "../../core/useContext/useContext";
import ls from "../../common-app/localStorage";
import { datefinally, hoursUtil } from "../../common/utils/utils";
interface Search {
  podcastSearch: string;
}

const ListContainer = ({ podcastSearch }: Search) => {
  const {
    setIsLoader,
    podcast,
    setPodcast,
    timeStamp,
    setTimesTamp,
    isTime,
    setIsTime,
  } = useContext(UseContextGeneral);

  useEffect(() => {
    const repository = new ListRepository();
    setIsLoader(true);
    repository.execute().then((data: List[]) => {
      setPodcast(data);
      setTimesTamp(hoursUtil());
      setIsTime(datefinally(timeStamp));
      setIsLoader(false);
    });
  }, []);

  useEffect(() => {
    ls.set("podcast", podcast);
    ls.set("timestamp-list", timeStamp);
  }, [isTime]);

  const filterPodcast = () => {
    return podcast.filter(
      (pods) =>
        pods.artist.toLowerCase().includes(podcastSearch) ||
        pods.title.toLowerCase().includes(podcastSearch)
    );
  };

  return (
    <>
      {filterPodcast().map((pod: List) => (
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
