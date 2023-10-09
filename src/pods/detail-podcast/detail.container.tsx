import { useEffect, useContext} from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { Data, Detail, IdRequest } from "../../model/detail.vm";
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

  //TODO revisar
  const getSummary = () => {
    let detailCard: any = [];
    podcast.filter((pod: any) => {
      if(pod.id === detail[0].id.toString()){
        return detailCard = ({...detail,summary: pod.summary})
      }
    });
    return detailCard;
  }

  useEffect(() => {
    const repository = new DetailRepository();
    repository.execute({ podcastId }).then((pod: Data[]) => {
      setDetail(pod);
      setTimesTamp(hoursUtil());
      setIsTime(datefinally(timeStamp));
    });
  }, [podcastId]);

  useEffect(() => {
    ls.set("detail", detail);
    ls.set("timestamp-detail", timeStamp);
  }, [isTime]);

  return <DetailComponent podcast={getSummary()} />;
};

PodcastContainer.propTypes = {
  podcastId: PropTypes.string,
};

export default PodcastContainer;
