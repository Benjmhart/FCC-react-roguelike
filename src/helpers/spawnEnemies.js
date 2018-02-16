
import enemies from "../assets/enemies"

function spawnEnemies(floor, num, floornumber) {
	if(num <= 0){
		return floor}
	const emptycoordsArr = floor.reduce((result, row, x)=> {
		const subArr = row.reduce ((result2, cell, y) =>{
			if(cell.contains==="none"){
				const newresult2 = [...result2]
				newresult2.push([x,y])
				return newresult2;
			}
			return result2
		}, [])
		const newResult = [...result]
		if(subArr.length >=1){subArr.forEach(item => newResult.push(item))}
		return newResult
	}, [])
	if(emptycoordsArr <=num){return floor}
	const EnemySpawnCoords = emptycoordsArr[Math.floor(Math.random() *emptycoordsArr.length)];
	const enemyChoice = enemies[Math.floor(Math.random() * floornumber)]
	floor[EnemySpawnCoords[0]][EnemySpawnCoords[1]] = { ...enemyChoice }
	/*
	if Floornumber = max floor && number = 1  {PLACE BOSS} - pick an enemy,  put king in its name, double its stats, and mark it boss: true
	else place stairsc
	*/
	const newnum = num - 1
	return spawnEnemies(floor, newnum, floornumber);
	
}

export default spawnEnemies