import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterPodcast from './filter.podcast';
import { BrowserRouter as Router } from "react-router-dom";

describe('Filter component specs', () => {
    const search = "the joe";
    const value: any = 'joe';
  it('should get input value', () => {
  
    render(<Router><FilterPodcast handlerInput={value} podcastSearch={search}/></Router>);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Filter podcast")).toBeInTheDocument();
  });
});
