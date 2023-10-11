import PropTypes from 'prop-types';
import React from "react";
import "./filter.css";
import { TitleH2, InputSearch } from '../../common/styled/styled.component';
interface Props {
    podcastSearch: string;
    handlerInput: React.Dispatch<React.SetStateAction<any>>
}

const FilterPodcast = ({ handlerInput, podcastSearch }: Props) => {
  const handlerInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value: string = e.target.value;
    handlerInput(value);
  };

  return (
    <section className='search-section'>
      <TitleH2>100</TitleH2>
      <InputSearch
        type="text"
        value={podcastSearch}
        placeholder="Filter podcast"
        onChange={handlerInputSearch}
      />
    </section>
  );
};

FilterPodcast.propTypes = {
  handlerInput: PropTypes.func,
  podcastSearch: PropTypes.string,
}

export default FilterPodcast;
