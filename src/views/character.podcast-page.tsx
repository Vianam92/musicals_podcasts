import { useParams } from "react-router-dom";
import EpisodesContainer from '../pods/episodes/episode.container';

const CharacterPodcast = () => {
  const { podcastId, episodeId } = useParams<string>();
  console.log(podcastId, episodeId)
    return (
      <EpisodesContainer podcastId={podcastId} episodeId={episodeId}/>
    );
}

export default CharacterPodcast; 