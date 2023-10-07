import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { List } from "../../model/list.vm";
import { ImageStyled, ListStyle } from "../../styled/styled.component";
import "./list.css";

const ListComponent = (props: List) => {

  return (
    <Link to={`podcast/${props.id}`}>
      <section className="section-list">
        <ul className="center-list">
          <li className="image-list">
            <ImageStyled src={props.image} alt={props.title} />
          </li>
          <ListStyle>{props.title}</ListStyle>
          <li className="author-list">
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
