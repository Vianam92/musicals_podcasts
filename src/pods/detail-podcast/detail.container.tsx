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
  const { podcast, detail, setDetail } = useContext(UseContextGeneral);
  const { timeStampDetail, setTimesTampDetail, isTime, setIsTime } =
    useContext(UseContextTime);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await detailRepository({ podcastId });
        const timeService = hoursUtil();
        if (response || isTime) {
          setTimesTampDetail(hoursUtil());
          setIsTime(datefinally(timeStampDetail));
          setDetail({
            detail: newDataFilter(podcast, response).summary,
            episodes: newDataFilter(podcast, response).episodes,
          });
          ls.set("detail", {
            value: {
              detail: newDataFilter(podcast, response).summary,
              episodes: newDataFilter(podcast, response).episodes,
            },
            time: timeStampDetail ? timeStampDetail : timeService,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, [podcastId, isTime]);

  return <DetailComponent podcastId={podcastId} detail={detail} />;
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
