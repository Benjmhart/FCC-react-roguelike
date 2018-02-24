import { emptySpace, stairs } from "../assets/mapObjects";
import enemies from "../assets/enemies";

function randomWalk(floor, seed, [Xstart, Ystart], direction, isLastFloor) {
  if (seed.length < 1 && isLastFloor === false) {
    if (Xstart === 50 && Ystart === 50) {
      floor[50][51] = { ...stairs };
    } else {
      floor[Xstart][Ystart] = { ...stairs };
    }
    return floor;
  }
  if (seed.length < 1 && isLastFloor === true) {
    const boss = { ...enemies[enemies.length - 1] };
    boss.boss = true;
    if (Xstart === 50 && Ystart === 50) {
      floor[50][51] = { ...boss };
    } else {
      floor[Xstart][Ystart] = { ...boss };
    }
    return floor;
  }
  const destOptions = [
    [Xstart - 1, Ystart],
    [Xstart + 1, Ystart],
    [Xstart, Ystart - 1],
    [Xstart, Ystart + 1]
  ];
  const newDirection = direction ? direction : seed[0] % 4 + 1;
  const destination = destOptions[newDirection - 1];
  const [destX, destY] = destination;
  //path for the end of one walk
  if (floor[destX][destY].contains === "wall" || seed[0] <= 5) {
    seed.shift();
    return randomWalk(floor, seed, [Xstart, Ystart], undefined, isLastFloor);
  }
  //path to advance a step

  floor[destX][destY] = { ...emptySpace };
  seed[0] -= 5;
  return randomWalk(floor, seed, [destX, destY], newDirection, isLastFloor);
}

export default randomWalk;
