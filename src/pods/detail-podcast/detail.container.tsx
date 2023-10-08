import { useEffect, useState } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { DetailData, IdRequest } from "../../model/detail.vm";
import ls from "../../common-app/localStorage";
import { datefinally, hoursUtil } from "../../common/utils";
import lsd from "../../common-app/localstorageDate";

const PodcastContainer = ({ podcastId }: IdRequest) => {
  const [podcast, setPodcast] = useState<DetailData[]>(ls.get("detail", []));
  const [timeStamp, setTimesTamp] = useState<number>(
    lsd.get("timestamp-detail", 0)
  );
  const [isTime, setIsTime] = useState<boolean>(false);

  useEffect(() => {
    const repository = new DetailRepository();
    repository.execute({ podcastId }).then((pod: DetailData[]) => {
      setPodcast(pod);
      setTimesTamp(hoursUtil());
      setIsTime(datefinally(timeStamp));
    });
  }, [podcastId]);

  useEffect(() => {
    ls.set("detail", podcast);
    lsd.set("timestamp-detail", timeStamp);
  }, [isTime]);

  return <DetailComponent podcast={podcast} />;
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
