import PropTypes from "prop-types";
import CardComponent from "../../common/card/card";
import CardEpisodesComponent from "../../common-app/card-episodes/card.episodes";
import { Data } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../common/layout/episodes.layout";

interface Props{
  detail:any;
  podcastId: string | undefined;
}

const DetailComponent = ({ detail, podcastId }: Props) => {
  return (
    <>
      <SectionEpisodesLayout>
        <CardComponent detail={detail} />
        {detail ? detail.episodes.map((episode: any, index: any) => {
          return <CardEpisodesComponent key={index} episode={episode} podcastId={podcastId}/>;
        }): <p>No existe</p>}
      </SectionEpisodesLayout>
    </>
  );
};

DetailComponent.propTypes = {
  detail: PropTypes.array,
  podcastId: PropTypes.string,
};

export default DetailComponent;
