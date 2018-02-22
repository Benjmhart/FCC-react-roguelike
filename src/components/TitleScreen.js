import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import beginCharCreate from "../actions/action_beginCharCreate";
import loadGame from "../actions/action_loadGame";

export const TitleScreen = ({ savedGame, beginCharCreate, loadGame, winLoss }) => {
  const {win, death} = winLoss.winLoss
  const disabledBool = !savedGame.character ? true : false;
  const basicText = "Dungeon Game"
  const endingText = (win) ? "You Win!" :  "Game Over!"
  const actualtext = (!win &&!death) ? basicText : endingText

  return (
    <div className="title-screen">
      <h1>{actualtext}</h1>
      <button className="new-game-button" onClick={() => beginCharCreate()}>
        New Game
      </button>
      <button
        className="resume-game-button"
        disabled={disabledBool}
        onClick={() => loadGame(savedGame)}
      >
        Resume Game
      </button>
    </div>
  );
};

TitleScreen.defaultProps = {
  savedGame: {},
  winLoss: {
    winLoss: {
      win: false,
      death:false
    }
  }
};

TitleScreen.propTypes = {
  savedGame: PropTypes.object,
  beginCharCreate: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired,
  winLoss: PropTypes.shape({
    winLoss: PropTypes.shape({
      win: PropTypes.bool,
      death: PropTypes.bool
    })
  })
};

function mapStateToProps(state) {
  const { savedGame, winLoss } = state;
  return { savedGame, winLoss };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ beginCharCreate, loadGame }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleScreen);
