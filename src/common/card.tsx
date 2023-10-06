import PropTypes from "prop-types";

const CardComponent = ({ podcast }: any) => {
  return (
    <article>
      {podcast.map((pod: any) => {
        return (
          <ul key={pod.id}>
            <li>
              <img src={pod.artwork} alt={pod.name} />
            </li>
            <li>{pod.artist}</li>
            <li>{pod.name}</li>
          </ul>
        );
      })}
    </article>
  );
};

CardComponent.propTypes = {
  podcast: PropTypes.array,
};

export default CardComponent;
