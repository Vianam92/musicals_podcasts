import PropTypes from "prop-types";
import { Detail } from "../model/detail.vm";
import "../card.css";
import {
  ListImage,
  Image,
  Title,
  TitleSpan,
  TitleBy,
  ListDescription,
  DescriptionSpan,
} from "./card.styled";
import { Link } from "react-router-dom";

const CardComponent = (props: Detail) => {
  return (
    <article className="card-article">
      <ul>
        <ListImage className="list-img">
          <Link to={`/podcast/${props.id}`}>
            <Image src={props.artwork} alt={props.trackName} />
          </Link>
        </ListImage>
        <Title className="title">
          <Link to={`/podcast/${props.id}`}>
            <TitleSpan>{props.artist}</TitleSpan>
            <TitleBy>By {props.trackName}</TitleBy>
          </Link>
        </Title>
        <ListDescription className="descrition">
          <DescriptionSpan>Description: </DescriptionSpan>
          <small>{props.summary}</small>
        </ListDescription>
      </ul>
    </article>
  );
};

CardComponent.propTypes = {
  trackName: PropTypes.string,
  artist: PropTypes.string,
  summary: PropTypes.string,
  id: PropTypes.string,
};

export default CardComponent;
