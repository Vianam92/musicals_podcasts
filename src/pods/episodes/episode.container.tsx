import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import { EpisodesRepository } from "./episodes.repository";
import EpisodesComponent from "./episodes.component";

const EpisodesContainer = () => {
  const [episodes, setEpisodes] = useState<any>([])
  const {
    detail
  } = useContext(UseContextGeneral);

  useEffect(() => {
    const repository = new EpisodesRepository();
    repository.execute({detail}).then((data: any) => {
      setEpisodes(data)
    });
  }, []);

  console.log(episodes)

  return (<EpisodesComponent detail = {detail}/>
  );
};

export default EpisodesContainer;
