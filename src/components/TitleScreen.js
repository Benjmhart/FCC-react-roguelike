import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import beginCharCreate from "../actions/action_beginCharCreate";
import loadGame from "../actions/action_loadGame";

export const TitleScreen = ({ savedGame }) => {
  const disabledBool = !savedGame.character ? true : false;
  return (
    <div className="title-screen">
      <h1>Dungeon Game</h1>
      <button className="new-game-button">New Game</button>
      <button className="saved-game" disabled={disabledBool} >Resume Game</button>
    </div>
  );
};

TitleScreen.defaultProps = {
  savedGame: {}
};

TitleScreen.propTypes = {
  savedGame: PropTypes.object,
  beginCharCreate: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { savedGame } = state;
  return { savedGame };
}

function mapDispatchToProps(dispatch) {
  return { beginCharCreate, loadGame };
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleScreen);
