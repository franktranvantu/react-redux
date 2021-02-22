import React, {PropTypes} from 'react';

Stats.propTypes = {
  players: PropTypes.array.isRequired,
};

const Stats = props => {
  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{playerCount}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoints}</td>
      </tr>
      </tbody>
    </table>
  );
}

export default Stats;