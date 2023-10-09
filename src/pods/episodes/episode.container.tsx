import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import { EpisodesRepository } from "./episodes.repository";

const EpisodesContainer = () => {
  const [episodes, setEpisodes] = useState<any>([])
  const {
    detail
  } = useContext(UseContextGeneral);

  console.log(detail)

  useEffect(() => {
    const repository = new EpisodesRepository();
    repository.execute({detail}).then((data: any) => {
      setEpisodes(data)
    });
  }, []);

  console.log(episodes)

  return (
    <>
     <h1>Hola</h1>
    </>
  );
};

export default EpisodesContainer;
