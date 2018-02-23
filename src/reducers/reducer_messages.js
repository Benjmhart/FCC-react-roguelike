import { CHAR_MOVE, UPDATE_CHAR, LOAD_GAME } from "../actions/actionTypes";
import shrinkArray from "../helpers/shrinkArray";
import removeAndSetLocalStoage from "../helpers/removeAndSetLocalStorage";

export default function(
  state = [],
  action,
  localStore = removeAndSetLocalStoage
) {
  switch (action.type) {
    case UPDATE_CHAR: {
      const responseArr = [
        "Welcome to the dungeon!",
        "Click the map and use arrows keys to move"
      ];
      if (action.payload.perception < 2) {
        responseArr.push("Can't see anything? maybe perception is important");
      }
      localStore(responseArr, "messages");
      return responseArr;
    }
    case CHAR_MOVE: {
      const pl = action.payload;
      const newState = [...state];
      if (!pl.success) {
        if (pl.destinationContents.contains === "wall" || pl.destinationContents.contains === "dirtWall") {

          newState.push("You bumped into a wall");
        }
        //combat messages will go here
        if(pl.combat){
          if(pl.combatDetails.death || pl.combatDetails.win){
            localStore(null, "messages", true)
            return []
          }
          if(pl.combatDetails.received){
            const receivedArr = pl.combatDetails.received
            if(receivedArr.length > 1){
              const totalReceieved = pl.combatDetails.received.reduce((total, recItem) =>{
                return total + recItem.damage
              }, 0)
              if(totalReceieved===0){newState.push(`${pl.combatDetails.received.length} enemies attacked, but you dodged it all you smooth criminal`)
                
              }
              else{
                newState.push(`you were hit by ${pl.combatDetails.received.length} enemies for ${totalReceieved}   damage`)
              }
            } else if(receivedArr.length===1){
              const name = receivedArr[0].origin.enemyCellObject.name
              const [ coordx, coordy ] = receivedArr[0].origin.coords
              const damage = receivedArr[0].damage
              if(!receivedArr[0].hit) {newState.push(`the ${name} at [${coordx}  ,${coordy}] swung, but missed!`)}
              if(receivedArr[0].dodge) {newState.push(`the ${name} at [${coordx}  ,${coordy}] swung, but you dodged!`)}
              if(receivedArr[0].crit===true && receivedArr[0].damage > 0) {newState.push(`the ${name} at   [${coordx},${coordy}] Critically hit you for ${damage} damage!`)}
              else if(receivedArr[0].damage > 0) {newState.push(`the ${name} at [${coordx},${coordy}] hit you for ${damage} damage!`)}
            }
          }
          if(pl.combatDetails.dealt.length > 0){
            const DealtArr =   pl.combatDetails.dealt.reduce((Arr, dealtItem, index) =>{
                if(dealtItem.damage>0){Arr.push(index)}
                return Arr
              }, [])
              
              //beserk functionality
            if(DealtArr.length > 1){
              
              const totaldealt =  pl.combatDetails.dealt.reduce((total, dealtItem) =>{
                return total + dealtItem.damage
              }, 0)
              const totalKills = pl.combatDetails.dealt.reduce((total, dealtItem) =>{
                if(dealtItem.kill){return total+1}
                return total
              }, 0)
              const message = `you went beserk and dealt ${totaldealt} damage to ${DealtArr.length} enemies`
              if(totalKills >=1){
                const kills = `, you killed ${totalKills}`
                const merge = [message,kills].join('')
                newState.push(merge)
              }else{newState.push(message)}
            }
              const {damage, hit, dodge, kill, crit} = pl.combatDetails.dealt[0];
              const name = pl.combatDetails.dealt[0].target.enemyCellObject.name
              const [ coordx, coordy ]  = pl.combatDetails.dealt[0].target.coords
              if(!hit){newState.push(`you swung at the ${name} at [${coordx},${coordy}], but missed!`)}
              if(dodge){newState.push(`you swung at the ${name} at [${coordx},${coordy}], but it dodged!`)}
              if(crit && damage > 0 && !kill){newState.push(`you critically hit the ${name} at [${coordx},${coordy}] for ${damage} damage!`)}
              else if(damage > 0 && !kill){newState.push(`you hit the ${name} at [${coordx},${coordy}] for ${damage} damage!`)}
              if(kill){newState.push(`you killed the ${name} at [${coordx},${coordy}]!`)
              }
              
            
            const drops = []
            pl.combatDetails.dealt.forEach(dealtItem => {
              if(dealtItem.getEquipment && dealtItem.equipmentDrop){drops.push(dealtItem.equipmentDrop[dealtItem.equipDropType].name)}
              if(dealtItem.healthDrop){drops.push(dealtItem.healthDrop.name)}
            })
            const mergedDrops = drops.join(' and a ')
            if(drops.length >=1){
              newState.push(`received a ${mergedDrops}`)
            }
            if(pl.combatDetails.LVLup){
              newState.push('You gained a Level! You are way cooler now than you were a second ago')
            }
          }
        }        
        
      }
      if (pl.success === true) {
        newState.push(
          `You walked ${pl.attemptedDirection} [${pl.newHeroCoords[0]},${
            pl.newHeroCoords[1]
          }]`
        );
      }
      const shrunkstate = shrinkArray(newState);

      localStore(shrunkstate, "messages");
      return shrunkstate;
    }
    case LOAD_GAME: {
      const loadedGame = action.payload.messages;
      loadedGame.push("you took a nap");
      return loadedGame;
    }
    default:
      return state;
  }
}
