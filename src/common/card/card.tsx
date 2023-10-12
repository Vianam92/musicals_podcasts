import PropTypes from "prop-types";
import { Detail, DetailModel } from "../model/detail.vm";
import '../card.css';
import { ListImage, Image , Title, TitleSpan, TitleBy, ListDescription, DescriptionSpan} from "./card.styled";

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
              <Image src={pod.artwork} alt={pod.trackName} />
            </ListImage>
            <Title className="title"><TitleSpan>{pod.artist}</TitleSpan><TitleBy>By {pod.trackName}</TitleBy></Title>
            <ListDescription className="descrition"><DescriptionSpan>Description: </DescriptionSpan><small>{pod.summary}</small></ListDescription>
          </ul>
        );
      }): ""}
    </article>
  );
};

CardComponent.propTypes = {
  detail: PropTypes.object,
};

export default CardComponent;
