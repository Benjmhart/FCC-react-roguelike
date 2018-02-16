/*global expect*/
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import enemiesMove from "../../helpers/enemiesMove"

const floor = [...mapObject3x3.dungeon[1]]
floor[1][1] = {contains:"enemy"}
const heroCoords = [2,2]

describe ("enemy movement operations", () => {
	const resultFloor = enemiesMove(floor, heroCoords)
    it("maintains a number of enemies equal to what we started with", () => {
    	const enemyTotal = resultFloor.reduce((total, row) => {
            const rowtotal = row.reduce((subtotal,cell) =>{
                if(cell.contains==="enemy"){return subtotal+1}
                return subtotal
            }, 0)
            return total+rowtotal
        }, 0)
        expect(enemyTotal).toBe(1)
    })
    it("moves the enemy toward the hero", () => {
    	const enemycoords = resultFloor.reduce((total, row, x) => {
            const rowtotal = row.reduce((subtotal,cell, y) =>{
                if(cell.contains==="enemy"){ subtotal.push([x,y])}
                return subtotal
            }, [])
            if(rowtotal.length >= 1){rowtotal.forEach(item => total.push(item))}
            return total
        }, [])
        const premonition = (
        	(enemycoords[0][0] === 1 && 
        	enemycoords[0][1] ===2) || 
        	(enemycoords[0][0] === 2 && 
        	enemycoords[0][1] ===1));
        expect(premonition).toBe(true)
    })
})