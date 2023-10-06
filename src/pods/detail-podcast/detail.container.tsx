import { useEffect, useState } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";

const PodcastContainer = ({ podcastId }: any) => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    const repository = new DetailRepository();
    repository.execute({ podcastId }).then((pod: any) => {
      setPodcast(pod)
    });
  }, [podcastId]);

  return <DetailComponent podcast={podcast}/>
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
