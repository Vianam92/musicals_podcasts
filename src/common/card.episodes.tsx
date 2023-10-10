import PropTypes from "prop-types";
import { Detail, IdRequest } from '../model/detail.vm';
import { ThCard, TrCard, TdCard } from "./card.episodes.styled";
import { Link } from "react-router-dom";
import "./card.css";

interface Props{
  episode:Detail[];
  podcastId:IdRequest;
}

const CardEpisodesComponent = ({ episode, podcastId }: Props) => {

  function convertDateFormat(string: string) {
    var info = string.split('-').reverse().join('/');
    return info;
}
  return (
    <article className="article-episodes">
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
        {episode?.slice(0,8).map((value: any) => {
          return (
              <TrCard key={`${value.date.slice(2,4)}-${value.idTrack}`}>
                <TdCard><Link to={`podcast/${podcastId}`}>{value.trackName}</Link></TdCard>
                <TdCard>{convertDateFormat(value.date.slice(0, 10))}</TdCard>
                <TdCard>{value.date.slice(11).slice(0, 5)}</TdCard>
              </TrCard>
          )
        })}
        </tbody>
      </table>
    </article>
  );
};

CardEpisodesComponent.propTypes = {
  episode: PropTypes.array,
  podcastId: PropTypes.string,
};

export default CardEpisodesComponent;
