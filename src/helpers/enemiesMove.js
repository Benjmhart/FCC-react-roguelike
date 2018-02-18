import { emptySpace } from "../assets/mapObjects";

const enemiesMove = (floor, [herox, heroy]) => {
  const enemyCoordsArr = floor.reduce((total, row, x) => {
    const rowtotal = row.reduce((subtotal, cell, y) => {
      if (cell.contains === "enemy") {
        subtotal.push([x, y]);
      }
      return subtotal;
    }, []);
    if (rowtotal.length >= 1) {
      rowtotal.forEach(item => total.push(item));
    }
    return total;
  }, []);

  const enemyMoves = enemyCoordsArr.map(coordpair => {
    const [x, y] = coordpair;
    const moves = [];
    if (
      floor[x - 1][y].contains === "hero" ||
      floor[x][y - 1].contains === "hero" ||
      floor[x + 1][y].contains === "hero" ||
      floor[x][y + 1].contains === "hero"
    ) {
      return { coordpair, moves };
    }
    if (herox < x) {
      if (floor[x - 1][y].contains === "none") {
        moves.push([x - 1, y]);
      }
      if (heroy < y) {
        if (floor[x][y - 1].contains === "none") {
          moves.push([x, y - 1]);
        }
        if (floor[x + 1][y].contains === "none") {
          moves.push([x + 1, y]);
        }
        if (floor[x][y + 1].contains === "none") {
          moves.push([x, y + 1]);
        }
      }
    }
    if (herox > x) {
      if (floor[x + 1][y].contains === "none") {
        moves.push([x + 1, y]);
      }
      if (heroy > y) {
        if (floor[x][y + 1].contains === "none") {
          moves.push([x, y + 1]);
        }
        if (floor[x - 1][y].contains === "none") {
          moves.push([x - 1, y]);
        }
        if (floor[x][y - 1].contains === "none") {
          moves.push([x, y - 1]);
        }
      }
    }
    // expand for more complex movement when the hero is nearby
    if (herox === x && heroy < y) {
      if (floor[x][y - 1].contains === "none") {
        moves.push([x, y - 1]);
      }
      if (floor[x + 1][y].contains === "none") {
        moves.push([x + 1, y]);
      }
      if (floor[x - 1][y].contains === "none") {
        moves.push([x - 1, y]);
      }
      if (floor[x][y + 1].contains === "none") {
        moves.push([x, y + 1]);
      }
    }
    if (herox === x && heroy > y) {
      if (floor[x][y + 1].contains === "none") {
        moves.push([x, y + 1]);
      }
      if (floor[x + 1][y].contains === "none") {
        moves.push([x + 1, y]);
      }
      if (floor[x - 1][y].contains === "none") {
        moves.push([x - 1, y]);
      }
      if (floor[x][y - 1].contains === "none") {
        moves.push([x, y - 1]);
      }
    }

    if (herox < x && heroy === y) {
      if (floor[x - 1][y].contains === "none") {
        moves.push([x - 1, y]);
      }
      if (floor[x][y + 1].contains === "none") {
        moves.push([x, y + 1]);
      }
      if (floor[x][y - 1].contains === "none") {
        moves.push([x, y - 1]);
      }
      if (floor[x + 1][y].contains === "none") {
        moves.push([x + 1, y]);
      }
    }
    if (herox > x && heroy === y) {
      if (floor[x + 1][y].contains === "none") {
        moves.push([x + 1, y]);
      }
      if (floor[x][y + 1].contains === "none") {
        moves.push([x, y + 1]);
      }
      if (floor[x][y - 1].contains === "none") {
        moves.push([x, y - 1]);
      }
      if (floor[x - 1][y].contains === "none") {
        moves.push([x - 1, y]);
      }
    }
    const switchnum = Math.round(Math.random());
    const switchbool = switchnum === 1 ? true : false;
    if (switchbool) {
      [moves[0], moves[1]] = [moves[1], moves[0]];
    }
    return { coordpair, moves };
  });
  enemyMoves.forEach(({ coordpair, moves }) => {
    const cell = floor[coordpair[0]][coordpair[1]];
    const tempEnemy = { ...cell };
    delete tempEnemy.explored;

    if (moves[0]) {
      if (floor[moves[0][0]][moves[0][1]].contains === "none") {
        const isExplored = floor[moves[0][0]][moves[0][1]].explored
          ? true
          : false;
        const isExplored2 = floor[coordpair[0]][coordpair[1]].explored
          ? true
          : false;
        floor[coordpair[0]][coordpair[1]] = {
          ...emptySpace,
          explored: isExplored2
        };
        floor[moves[0][0]][moves[0][1]] = {
          ...tempEnemy,
          explored: isExplored
        };
        return;
      }
    }
    if (moves[1]) {
      if (floor[moves[1][0]][moves[1][1]].contains === "none") {
        const isExplored = floor[moves[1][0]][moves[1][1]].explored
          ? true
          : false;
        const isExplored2 = floor[coordpair[0]][coordpair[1]].explored
          ? true
          : false;
        floor[coordpair[0]][coordpair[1]] = {
          ...emptySpace,
          explored: isExplored2
        };
        floor[moves[1][0]][moves[1][1]] = {
          ...tempEnemy,
          explored: isExplored
        };

        return;
      }
    }

    if (moves[2]) {
      if (floor[moves[2][0]][moves[2][1]].contains === "none") {
        const isExplored = floor[moves[2][0]][moves[2][1]].explored
          ? true
          : false;
        const isExplored2 = floor[coordpair[0]][coordpair[1]].explored
          ? true
          : false;
        floor[coordpair[0]][coordpair[1]] = {
          ...emptySpace,
          explored: isExplored2
        };
        floor[moves[2][0]][moves[2][1]] = {
          ...tempEnemy,
          explored: isExplored
        };
        return;
      }
    }

    if (moves[3]) {
      if (floor[moves[3][0]][moves[3][1]].contains === "none") {
        const isExplored = floor[moves[3][0]][moves[3][1]].explored
          ? true
          : false;
        const isExplored2 = floor[coordpair[0]][coordpair[1]].explored
          ? true
          : false;
        floor[coordpair[0]][coordpair[1]] = {
          ...emptySpace,
          explored: isExplored2
        };
        floor[moves[3][0]][moves[3][1]] = {
          ...tempEnemy,
          explored: isExplored
        };
        return;
      }
    }
  });
  return floor;
};

export default enemiesMove;
