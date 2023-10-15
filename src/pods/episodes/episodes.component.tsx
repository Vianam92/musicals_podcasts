import CardComponent from "../../common/card/card";
import PropTypes from "prop-types";
import AudioComponent from "../../common-app/audio-episodes/audio.component";
import {  Detail, DetailModel, Episodes } from "../../common/model/detail.vm";
import SectionEpisodesLayout from "../../layout/episodes.layout";
import { findEpisode } from "../../common/helpers/filter.helper";

interface Props {
  detail: DetailModel;
  episodeId: any ;
}

const EpisodesComponent = ({ detail, episodeId }: Props) => {
  return (
    <>
      <SectionEpisodesLayout>
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
        {Array.isArray(detail.episodes) ?  findEpisode(detail.episodes, {episodeId}).map((episode: Episodes) => (
          <AudioComponent
            key={episode.idTrack}
            description={episode.description}
            trackName={episode.trackName}
            url={episode.url}
          ></AudioComponent>
        )): <p>No Detail</p>}
      </SectionEpisodesLayout>
    </>
  );
};

EpisodesComponent.propTypes = {
  detail: PropTypes.object,
  episodeId: PropTypes.string,
};

export default EpisodesComponent;
