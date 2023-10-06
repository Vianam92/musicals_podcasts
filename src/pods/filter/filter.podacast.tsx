import PropTypes from 'prop-types';
import React from "react";

interface Props {
    podcastSearch: string;
    handlerInput: React.Dispatch<React.SetStateAction<any>>
}

const FilterPodcast = ({ handlerInput, podcastSearch }: Props) => {
    
  const handlerInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handlerInput(e.target.value);
  };

  return (
    <section>
      <h2>100</h2>
      <input
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
