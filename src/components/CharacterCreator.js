import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import updateCharacter from "../actions/action_updateChar";
import classText from "../assets/classText";

export const CharacterCreator = ({ character, updateCharacter }) => {
  const classDesc = () => {
    if (character.CLASS){
      return (
        <div className="class-desc">
          <h2 className="class-header">{character.CLASS}</h2>
          <p className="class-text">{classText[character.CLASS]}</p>
          <div className="equipment"> 
            <h2 className="equipment-header">Equipment Loadout</h2>
            <p className="equipment-armor">Armor: {character.armor.name}</p>
            <p className="equipment-weapon">Weapon: {character.weapon.name}</p>
            <p className="equipment-shoes">Shoes: {character.shoes.name}</p>
            <p className="equipment-helmet">Head: {character.helmet.name}</p>
            <p className="equipment-ring">Ring: {character.ring.name}</p>
          </div>
          
        </div>
      )
    }
    return <div></div>
  }
  return (
    <div className="character-creator">
      <div className="stat-forms">
        <div className="strength-form">
          <p className="str">Strength: {character.STR}</p>
          <button
            className="statbtn str increase"
            disabled={character.AVL <= 0 && true}
            onClick={() => updateCharacter({ STR: character.STR + 1 })}
          >
            +
          </button>
          <button
            className="statbtn str decrease"
            disabled={character.STR < 1}
            onClick={() => updateCharacter({ STR: character.STR - 1 })}
          >
            -
          </button>
        </div>
        <div className="agility-form">
          <p className="agi">Agility: {character.AGI}</p>
          <button
            className="statbtn agi increase"
            disabled={character.AVL <= 0 && true}
            onClick={() => updateCharacter({ AGI: character.AGI + 1 })}
          >
            +
          </button>
          <button
            className="statbtn agi decrease"
            disabled={character.AGI < 1}
            onClick={() => updateCharacter({ AGI: character.AGI - 1 })}
          >
            -
          </button>
        </div>

        <div className="wisdom-form">
          <p className="wis">Wisdom: {character.WIS}</p>
          <button
            className="statbtn wis increase"
            disabled={character.AVL <= 0 && true}
            onClick={() => updateCharacter({ WIS: character.WIS + 1 })}
          >
            +
          </button>
          <button
            className="statbtn wis decrease"
            disabled={character.WIS < 1}
            onClick={() => updateCharacter({ WIS: character.WIS - 1 })}
          >
            -
          </button>
        </div>
        <div className="perception-form">
          <p className="per">Perception: {character.PER}</p>
          <button
            className="statbtn per increase"
            disabled={character.AVL <= 0 && true}
            onClick={() => updateCharacter({ PER: character.PER + 1 })}
          >
            +
          </button>
          <button
            className="statbtn per decrease"
            disabled={character.PER < 1}
            onClick={() => updateCharacter({ PER: character.PER - 1 })}
          >
            -
          </button>
        </div>

        <div className="charisma-form">
          <p className="cha">Charisma: {character.CHA}</p>
          <button
            className="statbtn cha increase"
            disabled={character.AVL <= 0 && true}
            onClick={() => updateCharacter({ CHA: character.CHA + 1 })}
          >
            +
          </button>
          <button
            className="statbtn cha decrease"
            disabled={character.CHA < 1}
            onClick={() => updateCharacter({ CHA: character.CHA - 1 })}
          >
            -
          </button>
        </div>
        <div className="luck-form">
          <p className="luk">Luck: {character.LUK}</p>
          <button
            className="statbtn luk increase"
            disabled={character.AVL <= 0 && true}
            onClick={() => updateCharacter({ LUK: character.LUK + 1 })}
          >
            +
          </button>
          <button
            className="statbtn luk decrease"
            disabled={character.LUK < 1}
            onClick={() => updateCharacter({ LUK: character.LUK - 1 })}
          >
            -
          </button>
        </div>
        <div className="selector-form">
          <p>Choose your Class: </p>
          <select
            className="class-selector"
            value={character.CLASS}
            onChange={e => updateCharacter({ CLASS: e.target.value })}
          >
            <option className="no-class" value="">choose a class</option>
            <option className="archaeologist" value="archaeologist">
              Archaeologist
            </option>
            <option className="barbarian" value="barbarian">
              Barbarian
            </option>
            <option className="knight" value="knight">
              Knight
            </option>
            <option className="tourist" value="tourist">
              Tourist
            </option>
            <option className="god" value="god">
              God
            </option>
          </select>
        </div>
        <button
          className="finish"
          onClick={() => {
            updateCharacter({ isNew: false });
          }}
          disabled={character.AVL !== 0 || character.CLASS === ""}
        >
          FINISH
        </button>
      </div>
      {classDesc()}
      
    </div>
  );
};

//proptypes
CharacterCreator.propTypes = {
  character: PropTypes.object.isRequired,
  updateCharacter: PropTypes.func.isRequired
};
//connect up character state and an update character action
function mapStateToProps(state) {
  const { character } = state;
  return { character };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCharacter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreator);
