import { useEffect, useContext } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { IdRequest } from "../../common/model/detail.vm";
import UseContextGeneral from "../../core/useContext/useContext";
import { UseContextTime } from "../../core/useContext/useTime";
import { useDetail } from "./detail.hook";


const PodcastContainer = ({ podcastId }: IdRequest) => {
  const { detail } = useContext(UseContextGeneral);
  const { isTime } = useContext(UseContextTime);
  const {loadDetail} = useDetail({podcastId});

  useEffect(() => {
    loadDetail();
  }, [podcastId, isTime]);

  return <DetailComponent podcastId={podcastId} detail={detail} />;
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
