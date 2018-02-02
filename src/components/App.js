import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/App.css";
import TitleScreen from "./TitleScreen";
import GameView  from "./GameView";
import CharacterCreator from "./CharacterCreator";


export const App = ({ gameBoard, character}) => {
  const renderContents = () => {
    if (!gameBoard.currentFloor && !character.isNew) {
      return <TitleScreen />;
    }
    if (!gameBoard.currentFloor && character.isNew) {
      return <CharacterCreator />;
    }
    if (gameBoard && character.isNew === false) {
      return <GameView />;
    }
    return <p> component not found</p>
  };
  return (<div className="App">
  {renderContents()}
  </div>)
};

function mapStateToProps(state) {
  const { gameBoard, character } = state;
  return { gameBoard, character };
}

App.defaultProps = {
  gameBoard: {},
  character: {}
};

App.propTypes = {
  gameBoard: PropTypes.shape({
    currentFloor: PropTypes.number,
    map: PropTypes.array,
  }),
  character: PropTypes.shape({
    isNew: PropTypes.bool,
    STR: PropTypes.number,
    AGI: PropTypes.number,
    WIS: PropTypes.number,
    PER: PropTypes.number,
    CHA: PropTypes.number,
    LUK: PropTypes.number,
    AVL: PropTypes.number,
    CLASS: PropTypes.string
  })
};

export default connect(mapStateToProps)(App);
