import PropTypes from "prop-types";
import { Data, IdRequest } from "../../common/model/detail.vm";
import { ThCard, TrCard, TdCard, TdLast } from "./card.episodes.styled";
import { Link } from "react-router-dom";
import "../../common/card.css";
import { convertDateFormat } from "../../common/utils/change.format";
import { CardsEpisodes } from "../../styled/styled.component";

interface Props {
  episode: Data[];
  podcastId: IdRequest;
}

const CardEpisodesComponent = ({ episode, podcastId }: Props) => {
  
  return (
    <CardsEpisodes className="article-episodes">
      <h2>
        Episodes: <small>{episode?.length}</small>
      </h2>
      <table>
        <thead>
          <tr>
            <ThCard>Title</ThCard>
            <ThCard>Date</ThCard>
            <ThCard>Duration</ThCard>
          </tr>
        </thead>
        <tbody>
          {episode?.map((value: Data) => {
            return (
              <TrCard key={`${value.idTrack}`}>
                <TdCard>
                  <Link to={`/podcast/${podcastId}/episode/${value.idTrack}`}>
                    {value.trackName}
                  </Link>
                </TdCard>
                <TdCard>{convertDateFormat(value.date.slice(0, 10))}</TdCard>
                <TdLast>{value.date.slice(11).slice(0, 5)}</TdLast>
              </TrCard>
            );
          })}
        </tbody>
      </table>
    </CardsEpisodes>
  );
};

CardEpisodesComponent.propTypes = {
  episode: PropTypes.array,
  podcastId: PropTypes.string,
};

export default CardEpisodesComponent;
