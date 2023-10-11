import React from "react";
import { render, screen } from "@testing-library/react";
import CardEpisodesComponent from "./card.episodes";
import { BrowserRouter as Router } from "react-router-dom";
import { CardEpisode } from "../../common/model/detail.vm";

describe("Card Episodes Component", () => {
  it("should  render", () => {
    const episode: CardEpisode[] = [{
      idTrack: '0',
      trackName: "The Joe Music",
      date: "2/5/2023 04:00"
    }];

    const podcastId: any = 1254;

    render(
      <Router>
        <CardEpisodesComponent
          episode={episode}
          podcastId={podcastId}
        />
      </Router>
    );
    expect(screen.getByText('The Joe Music')).toBeInTheDocument();
  });
});
