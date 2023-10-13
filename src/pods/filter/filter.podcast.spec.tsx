import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterPodcast from './filter.podcast';
import { BrowserRouter as Router } from "react-router-dom";
import { List } from '../../common/model/list.vm';

describe('Filter component specs', () => {
    const search = "the joe";
    const value: any = 'joe';
    const podcast: List[] = [{
      id: "2545",
      artist: "The Joe",
      image: "",
      title: "The Joe"
    }]
  it('should get input value', () => {
  
   render(
    <Router> 
      <FilterPodcast podcast={podcast} handlerInput={value} podcastSearch={search}/>
    </Router>)

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Filter podcast")).toBeInTheDocument();
  });
  it('should show one', () => {
  
    render(
     <Router> 
       <FilterPodcast podcast={podcast} handlerInput={value} podcastSearch={search}/>
     </Router>)
 
     const text = screen.getByText("1");
 
     expect(text).toBeInTheDocument();;
     
   });
});
