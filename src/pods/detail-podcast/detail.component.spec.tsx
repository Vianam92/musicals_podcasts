import React from "react";
import { render } from "@testing-library/react";
import DetailComponent from "./detail.component";
import { BrowserRouter as Router } from "react-router-dom";
import { DetailModel } from "../../common/model/detail.vm";
describe("Detail Component", () => {
  it("should render", () => {
    const podcastId = "215487";
    const detail: DetailModel = {
      detail: [
        {
        id: '215487',
        artwork: "",
        artist: "The Joe",
        trackName: "The Joe",
        summary: "Lorem ipsun",
        idTrack: 215,
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
        idTrack: 215,
        url: "",
        date: "",
        description: ""
      }]
    };

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
