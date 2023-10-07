import React, { useState, useEffect, useContext } from "react";
import { ListRepository } from "./list.repository";
import ListComponent from "./list.component";
import PropTypes from 'prop-types';
import { List } from "../../model/list.vm";
import { LoaderContext } from '../../core/useContext/useLoader';
import ls from "../../common-app/localStorage";

interface Search {
  podcastSearch: string;
}

const ListContainer = ({podcastSearch}: Search) => {
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []));
  const { setIsLoader } = useContext(LoaderContext);

  useEffect(() => {
    const repository = new ListRepository();
    setIsLoader(true);
    repository.execute().then((data: any) => { 
      setPodcast(data);
      setIsLoader(false);
      });
  }, []);

  useEffect(() => {
    const day: any = new Date().getTime();
    ls.set("podcast", podcast);
    ls.set("timestamp", day)
  })

  //isOutdated(JSON.parse(localStorage.getItem(podcastsKey)).timestamp)

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
