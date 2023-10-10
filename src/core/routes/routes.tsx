import { Route, Navigate, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../../views/view-page";
import PodcastDetail from "../../views/podcast.detail-page";
import CharacterPodcast from "../../views/character.podcast-page";
import { Suspense } from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/podcast/:podcastId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PodcastDetail />
            </Suspense>
          }
        />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CharacterPodcast />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
