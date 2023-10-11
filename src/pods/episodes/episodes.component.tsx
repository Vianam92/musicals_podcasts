import CardComponent from "../../common/card/card";
import PropTypes from "prop-types";
import AudioComponent from "../../common-app/audio.component";
import { Data } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../common/layout/episodes.layout";

interface Prop {
  detail: Data[];
  episodes: Data[];
}

const EpisodesComponent = ({ detail, episodes }: Prop) => {
  return (
    <>
      <SectionEpisodesLayout>
        <CardComponent detail={detail}></CardComponent>
        {episodes.map((episode: Data) => (
          <AudioComponent
            key={episode.idTrack}
            description={episode.description}
            trackName={episode.trackName}
            url={episode.url}
          ></AudioComponent>
        ))}
      </SectionEpisodesLayout>
    </>
  );
};

EpisodesComponent.propTypes = {
  detail: PropTypes.array,
  episodes: PropTypes.array,
};

export default EpisodesComponent;
