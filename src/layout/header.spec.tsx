import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header Component", () => {
  it("should  render", () => {
    render(
      <Router>
        <Header
        />
      </Router>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Podcaster');
  });
});
