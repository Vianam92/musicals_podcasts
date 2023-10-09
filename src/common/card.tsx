import PropTypes from "prop-types";
import { Data } from "../model/detail.vm";

const CardComponent = ({ detail }: any) => {

  return (
    <article>
      {detail ? detail.map((pod: Data) => {
        return (
          <ul key={pod.id}>
            <li>
              <img src={pod.artwork} alt={pod.name} />
            </li>
            <li>{pod.artist}</li>
            <li>{pod.name}</li>
            <li><span>Description: </span>{pod.summary}</li>
          </ul>
        );
      }): ""}
    </article>
  );
};

CardComponent.propTypes = {
  detail: PropTypes.array,
};

export default CardComponent;
