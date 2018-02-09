import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import makeViewHelper from "../helpers/makeView"
import getHeroCoords from "../helpers/getHeroCoords"
import  { hero } from "../assets/mapObjects"

export const Map = ({screenSize, gameBoard, makeView, getHero}) => {
	//finds the index of the hero in  the floor using helper function
	const floor = gameBoard.dungeon[gameBoard.currentFloor]
	const heroCoordsArr = getHero (floor)
	//passes screenSize and the heroCoords object to the makeview helper function
	const viewArr = heroCoordsArr ? makeView(screenSize, heroCoordsArr) : undefined;
	
	const maxX = gameBoard.dungeon[gameBoard.currentFloor].length;
	const maxY = gameBoard.dungeon[gameBoard.currentFloor][0].length;
	
	
	
	/*
	
	
	
	calls the renderItem with viewArr, maxX, maxY
	
	declares a styling object based on lengths of view array  to apply to the grid container
	
	
	*/
	
  return <div className="map-component"> </div>;
};

Map.defaultProps = {
	makeView: makeViewHelper,
	getHero: getHeroCoords
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
	makeView: PropTypes.func,
	getHero: PropTypes.func
}
function mapStateToProps(state) {
	const { screenSize, gameBoard } = state;
	return { screenSize, gameBoard }
}

export default connect(mapStateToProps)(Map);
