import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import EpisodesComponent from "./episodes.component";
import { IdRequest } from "../../common/model/detail.vm";

const EpisodesContainer = ({ episodeId }: IdRequest) => {
  const { detail } = useContext(UseContextGeneral);

  return <EpisodesComponent detail={detail} episodeId={episodeId}/>;
};

EpisodesContainer.propTypes = {
  episodeId: PropTypes.string,
};

export default EpisodesContainer;
