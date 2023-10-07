import { useParams } from "react-router-dom";
import PodcastContainer from "../pods/detail-podcast/detail.container";
//import { IdRequest } from "../model/detail.vm";

const PodcastDetail = () => {
  //TODO
  const { podcastId } = useParams<any>();

  return <PodcastContainer podcastId={podcastId} />;
};

export default PodcastDetail;
