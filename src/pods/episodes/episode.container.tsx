import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import { EpisodesRepository } from "./episodes.repository";
import EpisodesComponent from "./episodes.component";
import { IdRequest } from "../../model/detail.vm";

const EpisodesContainer = ({podcastId}: IdRequest) => {
  const [episodes, setEpisodes] = useState<any>([])
  const {
    detail
  } = useContext(UseContextGeneral);

  console.log(detail)

  useEffect(() => {
    const repository = new EpisodesRepository();
    repository.execute({podcastId}).then((data: any) => {
      setEpisodes(data)
    });
  }, []);

  console.log(episodes)

  return (<EpisodesComponent detail = {detail}/>
  );
};

export default EpisodesContainer;
