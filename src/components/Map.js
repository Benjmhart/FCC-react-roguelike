import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Array2D from 'array2d';
import makeViewHelper from "../helpers/makeView"
import  { hero } from "../assets/mapObjects"

export const Map = ({screenSize, gameBoard, makeView}) => {
	//finds the index of the hero in  the floor using reduce
	const floor = gameBoard.dungeon[gameBoard.currentFloor]
	const heroCoordsArr = Array2D.find(floor, (cell) => {return cell ===hero})
	console.log(heroCoordsArr)
	const heroCoords = {
		x: heroCoordsArr[0],
		y: heroCoordsArr[1]
	}
	console.log(heroCoords)
	/*
	 on 
	gameBoard.dungeon[gameboard.currentFloor],
	
	passes screenSize and the heroCoords object to the makeview helper function
	
	received back a view array with coordinates.
	runs a map on the view array, if either of the coordinates are less than zero, or 
	>= gameboard.dungeon[gameboard.currentFloor].length for x or 
	>= gameboard.dungeon[gameboard.currentFloor][x].length for y -pass only disabled info 
	to mapitem. 
	
	declares a styling object based on lengths of view array  to apply to the grid container
	
	
	*/
	
  return <div className="map-component"> </div>;
};

Map.defaultProps = {
	makeView: makeViewHelper
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
	makeView: PropTypes.func
	
}
function mapStateToProps(state) {
	const { screenSize, gameBoard } = state;
	return { screenSize, gameBoard }
}

export default connect(mapStateToProps)(Map);
