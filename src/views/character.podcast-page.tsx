import { useParams } from "react-router-dom";
import EpisodesContainer from '../pods/episodes/episode.container';

const CharacterPodcast = () => {
  const { podcastId } = useParams<string>();
    return (
      <EpisodesContainer podcastId={podcastId} />
    );
}

export default CharacterPodcast; 