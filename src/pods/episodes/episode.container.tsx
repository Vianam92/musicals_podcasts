import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import EpisodesComponent from "./episodes.component";
import { IdRequest } from "../../common/model/detail.vm";

const EpisodesContainer = ({podcastId, episodeId}: IdRequest) => {

  //TODO hacer un find
  const {
    detail
  } = useContext(UseContextGeneral);

  return (<EpisodesComponent detail = {detail}/>
  );
};

EpisodesContainer.propTypes = {
  podcastId: PropTypes.string,
  episodeId: PropTypes.string,
};

export default EpisodesContainer;
