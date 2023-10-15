import PropTypes from "prop-types";
import CardComponent from "../../common/card/card";
import CardEpisodesComponent from "../../common-app/card-episodes/card.episodes";
import { Detail, DetailModel } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../layout/episodes.layout";

interface Props {
  detail: DetailModel;
  podcastId: any;
}

const DetailComponent = ({ detail, podcastId }: Props) => {
  return (
    <SectionEpisodesLayout>
      {detail ? (
        <>
          {detail.detail.map((pod: Detail) => {
            return (
              <CardComponent
                key={pod.id}
                id={pod.id}
                artwork={pod.artwork}
                trackName={pod.trackName}
                summary={pod.summary}
                artist={pod.artist}
              />
            );
          })}
          <CardEpisodesComponent
            episode={detail.episodes}
            podcastId={podcastId}
          />
        </>
      ) : (
        <p>No podcasts</p>
      )}
    </SectionEpisodesLayout>
  );
};

DetailComponent.propTypes = {
  detail: PropTypes.object,
  podcastId: PropTypes.string,
};

export default DetailComponent;
