import { EpisodesAudio } from "../../common/model/detail.vm";
import { CardsEpisodes } from "../../common/styled/styled.component";
import "./audio.css";
import PropTypes from 'prop-types';

const AudioComponent = (props: EpisodesAudio) => {
  return (
    <CardsEpisodes>
      <h1>{props.trackName.slice(13)}</h1>
      <p>
      {props.description.slice(0,300)}
      </p>
      <p>
      {props.description.slice(301, 700)}
      </p>
      <p>
      {props.description.slice(701, 1500)}
      </p>
      <p>
      {props.description.slice(1501)}
      </p>
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
