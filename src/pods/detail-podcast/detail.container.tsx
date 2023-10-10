import { useEffect, useContext } from "react";
import DetailComponent from "./detail.component";
import PropTypes from "prop-types";
import { DetailRepository } from "./detail.repository";
import { IdRequest } from "../../model/detail.vm";
import ls from "../../common-app/localStorage";
import { datefinally, hoursUtil } from "../../common/utils";
import { UseContextGeneral } from "../../core/useContext/useContext";

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
      let ids = new Set();
      pod.filter((item:any) => ids.add(item.id));
      let newIds: any = Array.from(ids);
      let newDetail:any= [];
      let newPodcast:any=[];
      newIds.map((id: any) => {
        newPodcast.push(podcast.find((item:any) => item.id === id.toString()));
      })
      newIds.map((id: any) => {
        newDetail.push(pod.find((item:any) => item.id === id));
      })
      let addSummary: any = [];

      newPodcast.filter((item: any) => {
        newDetail.filter((data: any) => {
          addSummary.push({ ...data, summary: item.summary });
        });
      });
      setDetail(addSummary);
      setTimesTamp(hoursUtil());
      setIsTime(datefinally(timeStamp));
    });
  }, [podcastId]);

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
