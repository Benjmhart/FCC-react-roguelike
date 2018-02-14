export default function([cx,cy], mapObject, perception) {
	const floor = mapObject.dungeon[mapObject.currentFloor];
	const newfloor = floor.map((row, x) => {
		const newRow = row.map((cell, y) => {
			const diffx = x-cx;
			const diffy = y-cy;
			const diff = Math.sqrt(diffx*diffx + diffy*diffy)
			if(diff < perception){return {...cell, visible:true}}
			else if(cell.visible===true){
				return {...cell, visible:false, explored:true}
				
			}
			return cell
		})
		return newRow
	})
	const newMapObject = {...mapObject}
	newMapObject.dungeon[newMapObject.currentFloor]=newfloor;
	return newMapObject
}