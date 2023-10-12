import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UseContextGeneral } from "../../core/useContext/useContext";
import EpisodesComponent from "./episodes.component";
import { IdEpisodeRequest } from "../../common/model/detail.vm";

const EpisodesContainer = ({ episodeId }: any) => {
  const { detail } = useContext(UseContextGeneral);
 
  return <EpisodesComponent detail={detail} episodeId={episodeId}/>;
};

EpisodesContainer.propTypes = {
  episodeId: PropTypes.string,
};

export default EpisodesContainer;
