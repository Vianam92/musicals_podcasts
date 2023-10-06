import PropTypes from "prop-types";
import { Detail, DetailData } from "../model/detail.vm";

const CardComponent = ({ podcast }: Detail) => {
  return (
    <article>
      {podcast.map((pod: DetailData) => {
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