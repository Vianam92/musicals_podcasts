import PropTypes from "prop-types";

const CardComponent = ({ podcast }: any) => {

  return (
    <article>
          <ul>
            <li>
              <img src={podcast[0].artwork} alt={podcast[0].name} />
            </li>
            <li>{podcast[0].artist}</li>
            <li>{podcast[0].name}</li>
            <li>{podcast.summary}</li>
          </ul>
    </article>
  );
};

CardComponent.propTypes = {
  podcast: PropTypes.object,
};

export default CardComponent;
