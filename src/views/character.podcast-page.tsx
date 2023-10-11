import { useParams } from "react-router-dom";
import EpisodesContainer from '../pods/episodes/episode.container';

const CharacterPodcast = () => {
  const { episodeId } = useParams<string>();

    return (
      <EpisodesContainer episodeId={episodeId}/>
    );
}

export default CharacterPodcast; 