import PropTypes from "prop-types";
import { Data } from "../model/detail.vm";
import "./card.css";
import { ListImage, Image , Title, TitleSpan, TitleBy, ListDescription, DescriptionSpan} from "./card.styled";

const CardComponent = ({ detail}: any) => {
  return (
    <article>
      {detail ? detail.map((pod: Data) => {
        return (
          <ul key={pod.id}>
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
  detail: PropTypes.array,
};

export default CardComponent;
