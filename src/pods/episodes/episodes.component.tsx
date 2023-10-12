import CardComponent from "../../common/card/card";
import PropTypes from "prop-types";
import AudioComponent from "../../common-app/audio-episodes/audio.component";
import { Data, IdRequest } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../common/layout/episodes.layout";
import { findEpisode } from "../../common/helpers/filter.helper";

interface Prop {
  detail: any;
  episodeId: any;
}

const EpisodesComponent = ({ detail, episodeId }: Prop) => {
  return (
    <>
      <SectionEpisodesLayout>
        <CardComponent detail={detail}></CardComponent>
        {detail.episodes ?  findEpisode(detail.episodes, {episodeId}).map((episode: Data) => (
          <AudioComponent
            key={episode.idTrack}
            description={episode.description}
            trackName={episode.trackName}
            url={episode.url}
          ></AudioComponent>
        )): ""}
      </SectionEpisodesLayout>
    </>
  );
};

EpisodesComponent.propTypes = {
  detail: PropTypes.array,
  episodes: PropTypes.array,
};

export default EpisodesComponent;
