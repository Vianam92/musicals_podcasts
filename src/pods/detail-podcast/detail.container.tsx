import { useEffect, useContext} from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { Data,IdRequest } from "../../model/detail.vm";
import ls from "../../common-app/localStorage";
import { datefinally, hoursUtil } from "../../common/utils";
import {UseContextGeneral} from "../../core/useContext/useContext";

const PodcastContainer = ({ podcastId }: IdRequest) => {
  const {
    podcast,
    detail,
    setDetail,
    timeStamp,
    setTimesTamp,
    isTime,
    setIsTime,
  } = useContext(UseContextGeneral);

  useEffect(() => {
    const repository = new DetailRepository();
    repository.execute({ podcastId }).then((pod: any) => {
      let newData = podcast.filter((podc: any) => podc.id === pod[0].id.toString())
      let addSummary: any = [];
      pod.filter((item: any) => {
        newData.filter((data: any) => {
          addSummary.push({...item, summary: data.summary})
        })
      });
      setDetail(addSummary);
      setTimesTamp(hoursUtil());
      setIsTime(datefinally(timeStamp));
    });
  }, [podcastId]);

  console.log(detail)

  useEffect(() => {
    ls.set("detail", detail);
    ls.set("timestamp-detail", timeStamp);
  }, [isTime]);

  return <DetailComponent detail={detail} />;
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
