import React, { useState, useEffect, useContext } from "react";
import { ListRepository } from "./list.repository";
import ListComponent from "./list.component";
import PropTypes from 'prop-types';
import { List } from "../../model/list.vm";
import { LoaderContext } from '../../core/useContext/useLoader';

interface Search {
  podcastSearch: string;
}

const ListContainer = ({podcastSearch}: Search) => {
  const [podcast, setPodcast] = useState<List[]>([]);
  const { setIsLoader } = useContext(LoaderContext);

  useEffect(() => {
    const repository = new ListRepository();
    setIsLoader(true);
    repository.execute().then((data: any) => { 
    setPodcast(data);
    setIsLoader(false);
    });
  }, []);

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
