const wall = { contains: "wall" }
const hero = { contains: "hero" }
const none = { contains: "none" }
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
				[wall, wall, wall, wall, wall],
				[wall, none, none, none, wall],
				[wall, none, hero, none, wall],
				[wall, none, none, none, wall],
				[wall, wall, wall, wall, wall]
			]
		]
	}
		
export default mapObject3x3