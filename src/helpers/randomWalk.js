import { emptySpace, stairs } from "../assets/mapObjects";

function randomWalk(floor, seed, [Xstart, Ystart], direction) {
  if (seed.length < 1) {
    if(Xstart===50 && Ystart===50){floor[50][51]={...stairs}}
    else{floor[Xstart][Ystart]={...stairs}}
    return floor;
  }
  const destOptions = [
    [Xstart - 1, Ystart],
    [Xstart + 1, Ystart],
    [Xstart, Ystart - 1],
    [Xstart, Ystart + 1]
  ];
  const newDirection = direction ? direction : seed[0] % 4;
  const destination = destOptions[newDirection];
  const [destX, destY] = destination;
  //path for the end of one walk
  if (floor[destX][destY].contains === "wall" || seed[0] <= 5) {
    seed.shift();
    return randomWalk(floor, seed, [Xstart, Ystart]);
  }
  //path to advance a step

  floor[destX][destY] = { ...emptySpace };
  seed[0] -= 5;
  return randomWalk(floor, seed, [destX, destY], newDirection);
}

export default randomWalk;
