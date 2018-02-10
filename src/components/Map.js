import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import makeViewHelper from "../helpers/makeView"
import getHeroCoords from "../helpers/getHeroCoords";
import renderItems from "../helpers/renderItems"

export const Map = ({screenSize, gameBoard, fogofwar, character, makeView, getHero, renderItem}) => {
	//finds the index of the hero in  the floor using helper function
	const floor = gameBoard.dungeon[gameBoard.currentFloor]
	console.log(floor)
	const heroCoordsArr = getHero(floor)
	console.log(screenSize)
	console.log(heroCoordsArr)
	//passes screenSize and the heroCoords object to the makeview helper function
	const viewArr = heroCoordsArr ? makeView(screenSize, heroCoordsArr) : undefined;

	//call renderItem with viewArr, floor, character.PER and fogofwar	
	renderItem(viewArr, floor, character.PER, fogofwar)
	/*
	
	
	
	
	
	declares a styling object based on lengths of view array  to apply to the grid container
	
	
	*/
	const xlength = viewArr.length;
	const ylength = viewArr[0].length;
	//console.log("attempting style")
	//console.log(xlength, ylength)
	const style = {
      display: "grid",
      gridTemplateRows: `repeat(${xlength}, minmax( 10px, 1fr))`,
      gridTemplateColumns: `repeat(${ylength}, minmax(10px, 1fr))`
      /*
      borderBottom: "2px",
      borderStyle: "solid",
      borderColor: "black"
      */
	}
	
  return <div className="map-component" style={style}>
  {renderItem(viewArr, floor, character.PER, fogofwar)}
  </div>;
};

Map.defaultProps = {
	makeView: makeViewHelper,
	getHero: getHeroCoords,
	renderItem: renderItems
}

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
	renderItem: PropTypes.func
}
function mapStateToProps(state) {
	const { screenSize, gameBoard, fogofwar, character } = state;
	return { screenSize, gameBoard, fogofwar, character }
}

export default connect(mapStateToProps)(Map);
