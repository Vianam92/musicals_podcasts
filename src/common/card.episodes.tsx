import PropTypes from "prop-types";
import { Detail } from "../model/detail.vm";

const CardEpisodesComponent = ({ detail }: Detail) => {
  return (
    <article>
      <h2>
        Episodes: <small></small>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soleado</td>
            <td>Mayormente soleado</td>
            <td>Parcialmente nublado</td>
          </tr>
          <tr>
            <td>19°C</td>
            <td>17°C</td>
            <td>12°C</td>
          </tr>
          <tr>
            <td>E 13 km/h</td>
            <td>E 11 km/h</td>
            <td>S 16 km/h</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default CardEpisodesComponent;
