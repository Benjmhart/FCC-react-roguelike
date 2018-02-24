// receives a string as a seed

//starts at floor center and uses the contents of the seed string to construct a 2d array
//uses string to add monsters and items to the array in empty places
//pure function

/* 

STEPS

1. gets a seed string (40 char SHA15)
2. creates an empty 2D array of 100x100
3. all coordinates with an x or y index of 0 or 99 = wall
4. breaks seed string into an array, iterates with (tocharcode) to give 40 numbers
5. starts at index of array[50][50], iterates seed and uses it to lay down tunnels
6. for every 3 values in seed array, build a room at coordinates (may need to modulus 99 for values higher than 99), val1=X val2=y, val3=used to determine area, 
7. iterates the map, looks for empty spaces and puts monsters down 


8. NO DOORS/WALLS for rooms.  KEEP IT SIMPLE

*/

//return 2d array
import { wall, hero, emptySpace, dirtWall } from "../assets/mapObjects";
import generateSeed from "./generateSeed";
import roomGen from "./roomGen";
import randomWalk from "./randomWalk";
import spawnEnemies from "./spawnEnemies";

export const floorSize = 100;
export const startingPoint = 50; //hero will start at x=startingpoint, y=startingpoint
export const maxfloor = 6;
/*
procedural generation strategy:
Once the initial empty level is generated it needs to start up a recursive function which takes an array(map) a second array of numbers (seed) and the current index pair x and y

That function will itself call a recursive function to walk until it hits the hero or a wall using the instructions  from the seed array(each time returning itself with seed[i-1] until it hits zero

Once it tries to Call an index on the seed array that is undefined,  the function places a stairs down object. And returns. 

If this is the final floor,  place the boss

Laying out rooms? 
Use modulus of first item to pick the size,   modulus of 2nd item to pick the x dimension modulus of the 3rd to pick the y dimension. 
Reduce an array to a small array of the room to check if the space is available,  if the space is not available, do not place the room. 

Placing monsters

Iterate over the array in a map function,   if the coordinates have modulus of a certain number off the seed,  place an enemy there. 
*/

const createFloorFromSeed = floornum => {
  const oneDimension = new Array(floorSize);
  const oneDimensionFilled = oneDimension.fill(emptySpace);
  const twoDimension = oneDimension.fill([...oneDimensionFilled]);
  const emptyFloor = twoDimension.map((row, x) => {
    return row.map((cell, y) => {
      if (x === 0 || x === floorSize - 1 || y === 0 || y === floorSize - 1) {
        return { ...wall };
      }
      if (x === startingPoint && y === startingPoint) {
        return { ...hero };
      }
      return { ...dirtWall };
    });
  });

  // call generateSeed
  const seed = generateSeed(100);
  const seed2 = generateSeed(150);
  //call roomGen
  const floorWithRooms = roomGen(emptyFloor, seed);
  //call randomwalk
  const isLastFloor = floornum >= maxfloor ? true : false;
  const s = Math.floor(emptyFloor.length / 2);
  const floorWithHallways = randomWalk(
    floorWithRooms,
    seed2,
    [s, s],
    undefined,
    isLastFloor
  );
  const enemyAmount = Math.floor(Math.random() * 30) + 20;
  const floorWithEnemies = spawnEnemies(
    floorWithHallways,
    enemyAmount,
    floornum
  );
  //insert hero in case anything overwrote them
  floorWithEnemies[s][s] = { ...hero };

  return floorWithEnemies;
};

export default createFloorFromSeed;
