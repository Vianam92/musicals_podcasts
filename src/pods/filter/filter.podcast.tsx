import PropTypes from 'prop-types';
import React from "react";
import "./filter.css";
import { TitleH2, InputSearch } from '../../common/styled/styled.component';
import { List } from '../../common/model/list.vm';
import { filterPodcast } from '../../common/helpers/filter.helper';
interface Props {
    podcastSearch: string;
    handlerInput: React.Dispatch<React.SetStateAction<any>>;
    podcast: List[];
}

const FilterPodcast = ({podcast, handlerInput, podcastSearch }: Props) => {
  const handlerInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value: string = e.target.value;
    handlerInput(value);
  };

  return (
    <section className='search-section'>
      <TitleH2>{filterPodcast(podcast, podcastSearch).length}</TitleH2>
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
  podcast: PropTypes.array,
}

export default FilterPodcast;
