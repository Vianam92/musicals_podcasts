import PropTypes from "prop-types";
import CardComponent from "../../common/card/card";
import CardEpisodesComponent from "../../common-app/card-episodes/card.episodes";
import { Data, Detail, IdRequest } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../common/layout/episodes.layout";

interface Props{
  detail:Data[];
  episodes:Detail[];
  podcastId: string | undefined;
}

const DetailComponent = ({ detail, episodes, podcastId }: Props) => {
  return (
    <>
      <SectionEpisodesLayout>
        <CardComponent detail={detail} />
        {episodes?.map((episode: any, index: any) => {
          return <CardEpisodesComponent key={index} episode={episode} podcastId={podcastId}/>;
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
