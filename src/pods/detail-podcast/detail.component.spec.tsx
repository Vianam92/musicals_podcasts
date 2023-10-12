import React from "react";
import { render } from "@testing-library/react";
import DetailComponent from "./detail.component";
import { BrowserRouter as Router } from "react-router-dom";
import { Data } from "../../common/model/detail.vm";

describe("Detail Component", () => {
  it("should render", () => {
    const podcastId = "215487";
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

    render(
      <Router>
        <DetailComponent
          detail={detail}
          podcastId={podcastId}
        />
      </Router>
    );
  });
});
