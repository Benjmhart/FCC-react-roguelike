const wall = { contains: "wall", visible:true }
const hero = { contains: "hero", visible:true }
const none = { contains: "none", visible:true }
const mapObjectVisible = {
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
			],
		]
	}
		
export default mapObjectVisible