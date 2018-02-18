import React from "react";
import MapItem from "../components/MapItem";

export default function(viewArr, floor, fogofwar = true) {
  const maxX = floor.length;
  const maxY = floor[0].length;

  const divArray = viewArr.map(row => {
    const divRow = row.map(cell => {
      const { x, y } = cell;

      //if the cell is off the map, return disabled
      if (x < 0 || y < 0 || x >= maxX || y >= maxY) {
        return <MapItem disbool key={`${x},${y}cell`} fogofwar={fogofwar} />;
      }
      //if it can't be seen, return disabled

      if (fogofwar && !floor[x][y].visible && !floor[x][y].explored) {
        return <MapItem disbool key={`${x},${y}cell`} fogofwar={fogofwar} />;
      }
      //console.log(floor[x][y])
      return (
        <MapItem
          contents={floor[x][y]}
          key={`${x},${y}cell`}
          fogofwar={fogofwar}
        />
      );
    });
    return divRow;
  });
  return divArray;
}
