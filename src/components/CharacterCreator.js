import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import updateCharacter from "../actions/action_updateChar";

export const CharacterCreator = ({ character, updateCharacter }) => {
  return (
    <div className="character-creator">
      <p className="str" />
      <button className="statbtn str increase">+</button>
      <button className="statbtn str decrease">-</button>
    </div>
  );
};

//proptypes & defaultprops

//connect up character state and an update character action
function mapStateToProps(state) {
  const { character } = state;
  return { character };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCharacter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreator);
