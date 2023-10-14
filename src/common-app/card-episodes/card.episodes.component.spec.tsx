import React from "react";
import { render, screen } from "@testing-library/react";
import CardEpisodesComponent from "./card.episodes";
import { BrowserRouter as Router } from "react-router-dom";
import { Episodes } from "../../common/model/detail.vm";

describe("Card Episodes Component", () => {
  it("should  render", () => {
    const episode: Episodes[] = [{
      id: '0',
      artwork: "",
      trackName: "Song",
      idTrack: 215,
      url: "",
      date: "",
      description: ""
    }];

    const podcastId: any = '1254';

    render(
      <Router>
        <CardEpisodesComponent
          episode={episode}
          podcastId={podcastId}
        />
      </Router>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Song')).toBeInTheDocument();
  });
});
