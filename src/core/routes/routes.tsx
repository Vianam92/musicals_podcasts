import { Route, Navigate, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../../views/view-page";
import PodcastDetail from "../../views/podcast.detail-page";
import CharacterPodcast from "../../views/character.podcast-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<CharacterPodcast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;