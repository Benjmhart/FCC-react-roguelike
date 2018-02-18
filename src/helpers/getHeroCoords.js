export default function(arr2d) {
  const coords = arr2d.reduce((result, row, x) => {
    const rowresult = row.reduce((subresult, cell, y) => {
      if (cell.contains === "hero") {
        subresult.push([x, y]);
        return subresult;
      }
      return subresult;
    }, []);
    if (rowresult.length > 0) {
      result.push(rowresult);
      return result;
    }
    return result;
  }, []);
  return coords[0][0];
}
