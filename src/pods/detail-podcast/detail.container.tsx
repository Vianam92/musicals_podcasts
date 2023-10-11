import { useEffect, useContext } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { IdRequest } from "../../common/model/detail.vm";
import { datefinally, hoursUtil } from "../../common/utils/utils";
import UseContextGeneral from "../../core/useContext/useContext";
import { newDataFilter } from "../../common/helpers/filter.helper";
import { UseContextTime } from "../../core/useContext/useTime";
import ls from "../../common/local-storage.ts/localStorage";

const PodcastContainer = ({ podcastId }: IdRequest) => {
  const { podcast, detail, setDetail, episodes, setEpisodes } =
    useContext(UseContextGeneral);
  const { timeStamp, setTimesTamp, isTime, setIsTime } =
    useContext(UseContextTime);

    useEffect(() => {
      const repository = new DetailRepository();
      repository.execute({ podcastId }).then((pod: any) => {
        setDetail(newDataFilter(podcast, pod).addSummary);
        setEpisodes(newDataFilter(podcast, pod).newEpisodes);
        setTimesTamp(hoursUtil());
        setIsTime(datefinally(timeStamp));
      });
    }, [podcastId]);

    useEffect(() => {
      ls.set("detail", detail);
      ls.set("timestamp-detail", timeStamp);
    }, [isTime]);

  return (
    <DetailComponent
      podcastId={podcastId}
      detail={detail}
      episodes={episodes}
    />
  );
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
