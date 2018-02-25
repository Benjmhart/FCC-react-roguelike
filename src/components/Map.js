import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import makeViewHelper from "../helpers/makeView";
import getHeroCoords from "../helpers/getHeroCoords";
import renderItems from "../helpers/renderItems";
import charMove from "../actions/action_charMove";

export const Map = ({
  screenSize,
  gameBoard,
  fogofwar,
  character,
  makeView,
  getHero,
  renderItem,
  charMove
}) => {
  //finds the index of the hero in  the floor using helper function
  const floor = gameBoard.dungeon[gameBoard.currentFloor];
  //console.log(floor)
  const heroCoordsArr = getHero(floor);
  //console.log(screenSize)
  //console.log(heroCoordsArr)
  //passes screenSize and the heroCoords object to the makeview helper function
  const viewArr = heroCoordsArr
    ? makeView(screenSize, heroCoordsArr)
    : undefined;

  //call renderItem with viewArr, floor, character.PER and fogofwar
  renderItem(viewArr, floor, fogofwar);

  //declares a styling object based on lengths of view array  to apply to the grid container

  const xlength = viewArr.length;
  const ylength = viewArr[0].length;
  const style = {
    display: "grid",
    gridTemplateRows: `repeat(${xlength}, minmax( 10px, 1fr))`,
    gridTemplateColumns: `repeat(${ylength}, minmax(10px, 1fr))`
  };
  
  return (
    <div>
      <div className="control-div" 
        tabIndex="0"
        role="grid"
        onKeyDown={e => {
          charMove(e.nativeEvent.keyCode, floor, heroCoordsArr, character);
        }}>
          <div className="left" onClick = {() => {
          console.log('clicking left')
          charMove(37, floor, heroCoordsArr, character);
        }}/>
          <div className="right" onClick = {() => {
          charMove(39, floor, heroCoordsArr, character);
        }}/>
          <div className="up" onClick = {() => {
          charMove(38, floor, heroCoordsArr, character);
        }}/>
          <div className="down" onClick = {() => {
          charMove(40, floor, heroCoordsArr, character);
        }}/>
        </div>
      <div
        className="map-component"
        style={style}
      >
        {renderItem(viewArr, floor, fogofwar)}
      </div>
    </div>
  );
};

Map.defaultProps = {
  makeView: makeViewHelper,
  getHero: getHeroCoords,
  renderItem: renderItems,
  charMove: charMove
};

Map.propTypes = {
  screenSize: PropTypes.shape({
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired
  }).isRequired,
  gameBoard: PropTypes.shape({
    currentFloor: PropTypes.number.isRequired,
    dungeon: PropTypes.array.isRequired
  }).isRequired,
  character: PropTypes.object.isRequired,
  fogofwar: PropTypes.bool.isRequired,
  makeView: PropTypes.func,
  getHero: PropTypes.func,
  renderItem: PropTypes.func,
  charMove: PropTypes.func
};
function mapStateToProps(state) {
  const { screenSize, gameBoard, fogofwar, character } = state;
  return { screenSize, gameBoard, fogofwar, character };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ charMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
