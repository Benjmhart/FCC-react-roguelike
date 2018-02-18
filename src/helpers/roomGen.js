///takes a floor and an array of strings and adds rooms until it's length than 4
import { emptySpace } from "../assets/mapObjects";

function roomGen(floor, seedArr) {
  if (seedArr.length < 4) {
    return floor;
  }
  const Xstart = seedArr[0] % floor.length;
  const Ystart = seedArr[1] & floor[0].length;
  const width = seedArr[2] % 12;
  const height = seedArr[3] % 12;
  const Xend = Xstart + height;
  const Yend = Ystart + width;
  if (
    floor[Xstart][Ystart] &&
    floor[Xend] &&
    floor[Xend][Yend] &&
    floor[Xstart][Yend] &&
    floor[Xend][Ystart]
  ) {
    if (
      floor[Xstart][Ystart].contains !== "wall" &&
      floor[Xend][Yend].contains !== "wall" &&
      floor[Xstart][Yend].contains !== "wall" &&
      floor[Xend][Ystart].contains !== "wall"
    ) {
      const newFloor = floor.map((row, x) => {
        const newRow = row.map((cell, y) => {
          if (
            x > Xstart &&
            x < Xend &&
            y > Ystart &&
            y > Yend &&
            cell.contains !== "wall"
          ) {
            return { ...emptySpace };
          }
          return cell;
        });
        return newRow;
      });
      seedArr.splice(0, 4);
      return roomGen(newFloor, seedArr);
    }
  }
  seedArr.splice(0, 4);
  return roomGen(floor, seedArr);
}

export default roomGen;
