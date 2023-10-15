import React from "react";
import { render, screen } from "@testing-library/react";
import CardComponent from "./card";
import { BrowserRouter as Router } from "react-router-dom";
import { Detail } from "../model/detail.vm";

describe("Card Component", () => {
  it("should  render", () => {
    const detail: Detail = {
        id: '0',
        artwork: "",
        artist: "The Joe",
        trackName: "The Joe",
        summary: "Lorem ipsun",
        date: "",
    };

    render(
      <Router>
        <CardComponent
          id={detail.id}
          artwork={detail.artwork}
          trackName={detail.trackName}
          summary={detail.summary}
          artist={detail.artist}
        />
      </Router>
    );
    expect(screen.getByText('The Joe')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsun')).toBeInTheDocument();
  });
});
