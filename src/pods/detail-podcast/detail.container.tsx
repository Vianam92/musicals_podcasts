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
  const { podcast, detail, setDetail } =
    useContext(UseContextGeneral);
    const { timeStampDetail,
      setTimesTampDetail, isTime, setIsTime } =
      useContext(UseContextTime);

  useEffect(() => {
    detailRepository({ podcastId }).then((pod: any) => {
      if (pod || isTime) {
        setDetail({detail: newDataFilter(podcast, pod).summary, episodes: newDataFilter(podcast, pod).episodes});
        ls.set("detail", { value: {detail: newDataFilter(podcast, pod).summary, episodes: newDataFilter(podcast, pod).episodes}, time: hoursUtil() });
        setTimesTampDetail(hoursUtil());
        setIsTime(datefinally(timeStampDetail));
      }
    });
  }, [podcastId]);

  return (
    <DetailComponent
      podcastId={podcastId}
      detail={detail}
    />
  );
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
