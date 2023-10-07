import React, { useState, useEffect, useContext } from "react";
import { ListRepository } from "./list.repository";
import ListComponent from "./list.component";
import PropTypes from 'prop-types';
import { Feed, List } from "../../model/list.vm";
import { LoaderContext } from '../../core/useContext/useLoader';
import ls from "../../common-app/localStorage";
import lsd from "../../common-app/localstorageDate";

interface Search {
  podcastSearch: string;
}

const ListContainer = ({podcastSearch}: Search) => {
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []));
  const { setIsLoader } = useContext(LoaderContext);

  useEffect(() => {
    const repository = new ListRepository();
    setIsLoader(true);
    repository.execute().then((data: List[]) => { 
      setPodcast(data);
      setIsLoader(false);
      });
  }, []);

  useEffect(() => {
    const day: number = new Date().getTime();
    ls.set("podcast", podcast);
    lsd.set("timestamp", day)
  })

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
}

export default ListContainer;
