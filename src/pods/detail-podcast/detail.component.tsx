import PropTypes from "prop-types";
import CardComponent from "../../common/card/card";
import CardEpisodesComponent from "../../common-app/card-episodes/card.episodes";
import { Detail, IdRequest } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../layout/episodes.layout";

interface Props{
  detail:Detail;
  episodes:Detail[];
  podcastId:IdRequest;
}

const DetailComponent = ({ detail, episodes, podcastId }: any) => {
  return (
    <>
      <SectionEpisodesLayout>
        <CardComponent detail={detail} />
        {episodes?.map((episode: any) => {
          return <CardEpisodesComponent episode={episode} podcastId={podcastId}/>;
        })}
      </SectionEpisodesLayout>
    </>
  );
};

DetailComponent.propTypes = {
  detail: PropTypes.array,
  episodes: PropTypes.array,
  podcastId: PropTypes.string,
};

export default DetailComponent;
