import CardComponent from "../../common/card/card";
import PropTypes from "prop-types";
import AudioComponent from "../../common-app/audio-episodes/audio.component";
import {  DetailModel, Episodes } from "../../common/model/detail.vm";
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
        <CardComponent detail={detail}></CardComponent>
        {Array.isArray(detail.episodes) ?  findEpisode(detail.episodes, {episodeId}).map((episode: Episodes) => (
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
  detail: PropTypes.object,
  episodeId: PropTypes.string,
};

export default EpisodesComponent;
