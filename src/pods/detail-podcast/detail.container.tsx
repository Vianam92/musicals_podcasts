import { useEffect, useContext } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { detailRepository } from "./detail.repository";
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
      detailRepository({ podcastId }).then((pod: any) => {
        setDetail(newDataFilter(podcast, pod).summary);
        setEpisodes(newDataFilter(podcast, pod).episodes);
        setTimesTamp(hoursUtil());
        setIsTime(datefinally(timeStamp));
      });
    }, [podcastId]);

    useEffect(() => {
      ls.set("detail", detail);
      ls.set("timestamp-detail", timeStamp);
      ls.set("episodes", episodes);
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
