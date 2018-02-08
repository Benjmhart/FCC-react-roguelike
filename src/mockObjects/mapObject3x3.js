const wall = { contains: "wall"}
const hero = {contains: "hero"}
const mapObject3x3 = {
	currentFloor: 0,
	//accessed FXY - floor, row, column
	
	dungeon: [
			[
				[wall, wall, wall],
				[wall, hero, wall],
				[wall, wall, wall]
			],
			[
				[wall, wall, wall],
				[wall, hero, wall],
				[wall, wall, wall]
			]
		]
	}
		
export default mapObject3x3