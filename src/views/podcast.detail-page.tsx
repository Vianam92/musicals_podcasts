import { useParams } from "react-router-dom";
import PodcastContainer from "../pods/detail-podcast/detail.container";

const PodcastDetail = () => {
  const { podcastId }: any  = useParams();

  return <PodcastContainer podcastId={podcastId} />;
};

export default PodcastDetail;
