import { useEffect, useState } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { Detail, DetailData, IdRequest } from "../../model/detail.vm";

const PodcastContainer = ({ podcastId }: IdRequest) => {
  const [podcast, setPodcast] = useState<DetailData[]>([]);

  useEffect(() => {
    const repository = new DetailRepository();
    repository.execute({ podcastId }).then((pod: DetailData[]) => {
      return setPodcast(pod);
    });
  }, [podcastId]);

  return <DetailComponent podcast={podcast}/>
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
