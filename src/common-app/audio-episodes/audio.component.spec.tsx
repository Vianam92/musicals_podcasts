import React from "react";
import { render, screen } from "@testing-library/react";
import AudioComponent from "./audio.component";
import { BrowserRouter as Router } from "react-router-dom";
import { EpisodesAudio } from "../../common/model/detail.vm";

describe("Card Episodes Component", () => {
  it("should  render", () => {
    const episode: EpisodesAudio = {
      idTrack: 1,
      trackName: "The Joe Music",
      description: "Lorem ipsu.",
      url: "https://chrt.fm/track/BE7515/traffic.omny.fm/d/"
    };

    render(
      <Router>
        <AudioComponent
          description={episode.description}
          trackName={episode.trackName}
          url={episode.url}
        />
      </Router>
    );
  });
});
