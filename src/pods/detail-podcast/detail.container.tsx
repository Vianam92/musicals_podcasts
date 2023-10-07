import { useEffect, useState } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { DetailData, IdRequest } from "../../model/detail.vm";
import ls from "../../common-app/localStorage";
import { hoursUtil } from "../../common/utils";

const PodcastContainer = ({ podcastId }: IdRequest) => {
  const [podcast, setPodcast] = useState<DetailData[]>(ls.get("detail", []));

  useEffect(() => {
    const repository = new DetailRepository();
    repository.execute({ podcastId }).then((pod: DetailData[]) => {
      return setPodcast(pod);
    });
  }, [podcastId]);

  useEffect(() => {
    console.log(hoursUtil());
    ls.set("detail", {...podcast, timestamp: hoursUtil()});
  })

  return <DetailComponent podcast={podcast}/>
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
