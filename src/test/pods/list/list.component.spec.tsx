import React from "react";
import { render, screen } from "@testing-library/react";
import ListComponent from "../../../pods/list/list.component";
import { BrowserRouter as Router } from "react-router-dom";

describe("List Component", () => {
  it("should  render", () => {
    const podcast = {
      id: "2545",
      artist: "The Joe",
      image: "",
      title: "The Joe",
    };

    render(
      <Router>
        <ListComponent
          id={podcast.id}
          artist={podcast.artist}
          image={podcast.image}
          title={podcast.title}
        />
      </Router>
    );
    expect(screen.getByText('Author:')).toBeInTheDocument();
  });
});
