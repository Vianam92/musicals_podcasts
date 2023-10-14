import PropTypes from "prop-types";
import { Detail, DetailModel } from "../model/detail.vm";
import '../card.css';
import { ListImage, Image , Title, TitleSpan, TitleBy, ListDescription, DescriptionSpan} from "./card.styled";
import { Link } from "react-router-dom";

interface Props{
  detail: DetailModel;
}
const CardComponent = ({ detail}: Props) => {

  return (
    <article className="card-article">
      {detail ? detail.detail.map((pod: Detail) => {
        return (
          <ul key={pod.idTrack}>
            <ListImage className="list-img">
            <Link to={`/podcast/${pod.id}`}><Image src={pod.artwork} alt={pod.trackName}/></Link>
            </ListImage>
            <Title className="title"><Link to={`/podcast/${pod.id}`}><TitleSpan>{pod.artist}</TitleSpan><TitleBy>By {pod.trackName}</TitleBy></Link></Title>
            <ListDescription className="descrition"><DescriptionSpan>Description: </DescriptionSpan><small>{pod.summary}</small></ListDescription>
          </ul>
        );
      }): <p>No Detail</p>}
    </article>
  );
};

CardComponent.propTypes = {
  detail: PropTypes.object,
};

export default CardComponent;
