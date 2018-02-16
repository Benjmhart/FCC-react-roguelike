/*global expect*/
import roomGen from "../../helpers/roomGen"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import { dirtWall } from "../../assets/mapObjects"
import generateSeed from "../../helpers/generateSeed"



const dirtFloor = mapObject3x3.dungeon[1].map(row => row.map(cell => {
    if(cell.contains==="none"){return dirtWall}
    return cell
}));
const seed = generateSeed(10)
describe("basic safety options for generator", () => {
    it("does not destroy walls", () => {
        const resultFloor = roomGen(dirtFloor, seed)
        const walls = resultFloor.reduce((total, row) => {
            const rowtotal = row.reduce((subtotal,cell) =>{
                if(cell.contains==="wall"){return subtotal+1}
                return subtotal
            }, 0)
            return total+rowtotal
        }, 0)
        expect(walls).toBe(16)
    })
})