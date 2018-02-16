/*global expect*/
import spawnEnemies from "../../helpers/spawnEnemies"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import generateSeed from "../../helpers/generateSeed"

const Floor = mapObject3x3.dungeon[1]
describe("basic safety oerations for spawnEnemies", () => {
	const resultFloor = spawnEnemies(Floor, 1, 1)
    it("does not destroy walls", () => {
        const walls = resultFloor.reduce((total, row) => {
            const rowtotal = row.reduce((subtotal,cell) =>{
                if(cell.contains==="wall"){return subtotal+1}
                return subtotal
            }, 0)
            return total+rowtotal
        }, 0)
        expect(walls).toBe(16)
    })
    it("creates at least one enemy", () => {
    	const enemyTotal = resultFloor.reduce((total, row) => {
            const rowtotal = row.reduce((subtotal,cell) =>{
                if(cell.contains==="enemy"){return subtotal+1}
                return subtotal
            }, 0)
            return total+rowtotal
        }, 0)
        expect(enemyTotal).toBe(1)
    })
    
    it("gives the enemy stats", () => {
    	const enemycoords = resultFloor.reduce((total, row, x) => {
            const rowtotal = row.reduce((subtotal,cell, y) =>{
                if(cell.contains==="enemy"){ subtotal.push([x,y])}
                return subtotal
            }, [])
            if(rowtotal.length >= 1){rowtotal.forEach(item => total.push(item))}
            return total
        }, [])
        const foundEnemy = resultFloor[enemycoords[0][0]][enemycoords[0][1]]
        expect(foundEnemy.atkMin >=1).toBe(true)
    })
})