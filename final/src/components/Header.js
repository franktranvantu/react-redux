import React, {PropTypes} from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

Header.propTypes = {
  players: React.PropTypes.array.isRequired,
};

const Header = props => {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
}

export default Header;