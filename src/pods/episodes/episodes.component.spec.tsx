import React from "react";
import { render } from "@testing-library/react";
import EpisodesComponent from "./episodes.component";
import { BrowserRouter as Router } from "react-router-dom";
import { DetailModel } from "../../common/model/detail.vm";

describe("Episodes Component", () => {
  it("should render", () => {
    const detail: DetailModel = {
      detail: [
        {
        id: '0',
        artwork: "",
        artist: "The Joe",
        trackName: "The Joe",
        summary: "Lorem ipsun",
        idTrack: "215",
        url: "",
        date: "",
        description: ""
      }],
      episodes: [{
        id: '0',
        artwork: "",
        artist: "The Joe",
        trackName: "The Joe",
        summary: "Lorem ipsun",
        idTrack: "215",
        url: "",
        date: "",
        description: ""
      }]
    };
    const episodeId = "215"

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
