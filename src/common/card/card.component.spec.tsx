import React from "react";
import { render, screen } from "@testing-library/react";
import CardComponent from "./card";
import { BrowserRouter as Router } from "react-router-dom";

describe("Card Component", () => {
  it("should  render", () => {
    const detail: any = [{
      id: '0',
      artwork: "",
      artist: "The Joe",
      trackName: "The Joe",
      summary: "Lorem ipsun",
    }];

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
