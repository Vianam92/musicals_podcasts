import React from "react";
import { render } from "@testing-library/react";
import EpisodesComponent from "./episodes.component";
import { BrowserRouter as Router } from "react-router-dom";
import { Data } from "../../common/model/detail.vm";

describe("Episodes Component", () => {
  it("should render", () => {
    const detail: Data[] = [
      {
        id: "25458",
        artwork: "",
        trackName: "the joe",
        artist: "the joe",
        collection: "the joe",
        summary: "the joe song",
        date: "12-2-2023",
        url: "",
        description: "Lorem ipsum",
        idTrack: 25458,
      },
    ];
    const episodeId = "25458"

    render(
      <Router>
        <EpisodesComponent
          detail={detail}
          episodeId={episodeId}
        />
      </Router>
    );
  });
});
