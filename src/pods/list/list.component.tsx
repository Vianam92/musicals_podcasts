import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ListComponent = (props: any) => {

  return (
    <Link to={`podcast/${props.id}`}>
      <section>
        <ul>
          <li>
            <img src={props.image} alt={props.title}></img>
          </li>
          <li>{props.title}</li>
          <li>
            <span>Author: </span>
            {props.artist}
          </li>
        </ul>
      </section>
    </Link>
  );
};

ListComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
}

export default ListComponent;
