/*global expect*/
import WinLossReducer from "../../reducers/reducer_winLoss"
import {  getWin, getDead, getNoKill } from "../../mockObjects/combatObjects"
import { CHAR_MOVE } from "../../actions/actionTypes";
import enemies from "../../assets/enemies"

describe("basic winLoss reducer functionality", () => {
	const actionWithNoKill= {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getNoKill,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
    };
    const actionWithWin = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getWin,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const actionWithDeath = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getDead,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const initialState = {winLoss:{win:false, death:false}}
  
  it("returns false on win when passed unrelated action", () => {
  	const result = WinLossReducer(initialState, actionWithNoKill)
  	expect(result.winLoss.win).toBe(false)
  })
  it("returns false on death when passed an unrelated action", ()=> {
  	const result = WinLossReducer(initialState, actionWithNoKill)
  	expect(result.winLoss.death).toBe(false)
  })
  it("returns true on win when passed winning action", () => {
  	const result = WinLossReducer(initialState, actionWithWin)
  	expect(result.winLoss.win).toBe(true)
  })
  it("returns true on Death when passed Death action", () => {
  	const result = WinLossReducer(initialState, actionWithDeath)
  	expect(result.winLoss.death).toBe(true)
  })
})