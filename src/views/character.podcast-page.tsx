import { useParams } from "react-router-dom";
import EpisodesContainer from '../pods/episodes/episode.container';

const CharacterPodcast = () => {
  const { podcastId, episodeId } = useParams<string>();

    return (
      <EpisodesContainer podcastId={podcastId} episodeId={episodeId}/>
    );
}

export default CharacterPodcast; 