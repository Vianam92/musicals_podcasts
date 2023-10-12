import PropTypes from "prop-types";
import CardComponent from "../../common/card/card";
import CardEpisodesComponent from "../../common-app/card-episodes/card.episodes";
import { DetailModel } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../layout/episodes.layout";

interface Props{
  detail:DetailModel;
  podcastId: any;
}

const DetailComponent = ({ detail, podcastId }: Props) => {
  return (
    <>
      <SectionEpisodesLayout>
        <CardComponent detail={detail} />
        {detail ? detail.episodes.map((episode: any, index: number) => {
          return <CardEpisodesComponent key={index} episode={episode} podcastId={podcastId}/>;
        }): <p>No existe</p>}
      </SectionEpisodesLayout>
    </>
  );
};

DetailComponent.propTypes = {
  detail: PropTypes.object,
  podcastId: PropTypes.string,
};

export default DetailComponent;
