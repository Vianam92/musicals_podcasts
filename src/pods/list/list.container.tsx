import React, { useState, useEffect } from "react";
import { ListRepository } from "./list.repository";
import ListComponent from "./list.component";
import PropTypes from 'prop-types';
import { List } from "../../model/list.vm";

const ListContainer = () => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    const repository = new ListRepository();
    repository.execute().then((data: any) => {
      return setPodcast(data)});
  }, []);

  return (
    <>
      {podcast.map((pod: List) => (
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
