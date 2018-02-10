import MapItem from "../components/MapItem";
import getHeroCoords from "./getHeroCoords";
import React from 'react'

export default function (viewArr, floor, perception, fogofwar = true) {
	const maxX = floor.length;
	const maxY = floor[0].length;
	const heroCoords = getHeroCoords(floor);
	
	
	const divArray = viewArr.map( row => {
		 const divRow = row.map( cell => {
			const { x, y } = cell;
			
			//if the cell is off the map, return disabled
			if(x < 0 || y < 0 || x >= maxX || y >= maxY){
				return <MapItem disbool={true} key={`${x},${y}cell`}/> 
			}
			// understand distance to cell
			//console.log(cell[0], cell[1]);
			const xdist = Math.abs(x - heroCoords[0]);
			const ydist = Math.abs(y - heroCoords[1]);
			//console.log(xdist, ydist)
			const totalDist = xdist+ydist; 
			//if it can't be seen, return disabled
			if(fogofwar && totalDist > (perception)){
				return <MapItem disbool={true} key={`${x},${y}cell`}/> 
			}
			//console.log(floor[x][y])
			return <MapItem contents={floor[x][y]} key={`${x},${y}cell`}/>
		})
		return divRow
	})
	return divArray; 
}