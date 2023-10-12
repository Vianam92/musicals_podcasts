import React from "react";
import { render, screen } from "@testing-library/react";
import CardComponent from "./card";
import { BrowserRouter as Router } from "react-router-dom";
import { DetailModel } from "../model/detail.vm";

describe("Card Component", () => {
  it("should  render", () => {
    const detail: DetailModel = {
      detail: [
        {
        id: '0',
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
        <CardComponent
          detail={detail}
        />
      </Router>
    );
    expect(screen.getByText('The Joe')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsun')).toBeInTheDocument();
  });
});
