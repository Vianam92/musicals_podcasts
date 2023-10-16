import React from "react";
import { render, screen } from "@testing-library/react";
import CardComponent from "./card";
import { BrowserRouter as Router } from "react-router-dom";
import { Detail } from "../model/detail.vm";

describe("Card Component", () => {
  it("should  render", () => {
    const detail: Detail = {
      id: "1535809341",
      artwork: "https://image",
      artist: "The Joe",
      trackName: "The Joe",
      summary:"Tune into Joe Budden and his friends.",
      date: "2023-10-14T08:00:00Z",
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
    expect(screen.getByText("The Joe")).toBeInTheDocument();
    expect(screen.getByText("Tune into Joe Budden and his friends.")).toBeInTheDocument();
  });
});
