import PropTypes from "prop-types";

const CardEpisodesComponent = ({ podcast }: any) => {
  return (
    <article>
      <h2>
        Episodes: <small></small>
      </h2>
      
    </article>
  );
};

CardEpisodesComponent.propTypes = {
  podcast: PropTypes.object,
};

export default CardEpisodesComponent;
