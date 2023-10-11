import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import EpisodesComponent from "./episodes.component";
import { IdRequest } from "../../common/model/detail.vm";
import { findEpisode } from "../../common/helpers/filter.helper";

const EpisodesContainer = ({ episodeId }: IdRequest) => {
  const { detail, episodes } = useContext(UseContextGeneral);

  return <EpisodesComponent detail={detail} episodes={findEpisode(episodes, {episodeId})} />;
};

EpisodesContainer.propTypes = {
  episodeId: PropTypes.string,
};

export default EpisodesContainer;
