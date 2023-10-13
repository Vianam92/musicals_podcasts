import { EpisodesAudio } from "../../common/model/detail.vm";
import { CardsEpisodes } from "../../common/styled/styled.component";
import "./audio.css";
import PropTypes from 'prop-types';

const AudioComponent = (props: EpisodesAudio) => {
  return (
    <CardsEpisodes>
      <h1>{props.trackName}</h1>
      <p>{props.description}.</p>
      <audio src={props.url} controls>
        <p>
          Tu navegador no soporta HTML5 video. Aquí está el
          <a href={props.url}>enlace del video</a>.
        </p>
      </audio>
    </CardsEpisodes>
  );
};

AudioComponent.propTypes = {
  description: PropTypes.string,
  trackName: PropTypes.string,
  url: PropTypes.string,
};

export default AudioComponent;
