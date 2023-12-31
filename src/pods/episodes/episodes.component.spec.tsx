import React from "react";
import { render, screen } from "@testing-library/react";
import EpisodesComponent from "./episodes.component";
import { BrowserRouter as Router } from "react-router-dom";
import { DetailModel } from "../../common/model/detail.vm";

describe("Episodes Component", () => {
  it("should render", () => {
    const detail: DetailModel = {
      detail: [
        {
          id: "0",
          artwork: "",
          artist: "The Joe",
          trackName: "The Joe",
          summary: "Lorem ipsun",
          idTrack: "215",
          date: "",
        },
      ],
      episodes: [
        {
          id: 1535809341,
          artwork: "",
          trackName: "The Joe",
          idTrack: 1000629725791,
          url: "",
          date: "2023-09-30T07:00:00Z",
          description:
            "With the arrival of Drake’s ‘For All The Dogs,’ the JBP dives into the timestamp record ‘8am in Charlotte’",
        },
      ],
    };
    const episodeId = "1000629725791";

    render(
      <Router>
        <EpisodesComponent detail={detail} episodeId={episodeId} />
      </Router>
    );
  });
});
