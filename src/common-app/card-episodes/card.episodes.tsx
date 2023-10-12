import PropTypes from "prop-types";
import {Episodes, IdRequest} from "../../common/model/detail.vm";
import { ThCard, TrCard, TdCard, TdLast } from "./card.episodes.styled";
import { Link } from "react-router-dom";
import "../../common/card.css";
import { convertDateFormat } from "../../common/utils/change.format";
import { CardsEpisodes } from "../../common/styled/styled.component";

interface Props {
  episode: Episodes[];
  podcastId: IdRequest;
}

const CardEpisodesComponent = ({ episode, podcastId }: Props) => {
  return (
    <CardsEpisodes className="article-episodes">
      {episode ? (
        <>
          <h2>
            Episodes: <small>{episode ? episode?.length : ""}</small>
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
              {episode ? (
                episode?.map((value: Episodes) => {
                  return (
                    <TrCard key={`${value.idTrack}`}>
                      <TdCard>
                        <Link
                          to={`/podcast/${podcastId}/episode/${value.idTrack}`}
                        >
                          {value.trackName}
                        </Link>
                      </TdCard>
                      <TdCard>
                        {convertDateFormat(value.date.slice(0, 10))}
                      </TdCard>
                      <TdLast>{value.date.slice(11).slice(0, 5)}</TdLast>
                    </TrCard>
                  );
                })
              ) : (
                <p>Not episodes</p>
              )}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
    </CardsEpisodes>
  );
};

CardEpisodesComponent.propTypes = {
  episode: PropTypes.array,
  podcastId: PropTypes.string,
};

export default CardEpisodesComponent;
