const arraymax = 7;

function shrinkArray(arr) {
  if (arr.length <= arraymax) {
    return arr;
  }
  const newArr = [...arr];
  newArr.shift();
  return shrinkArray(newArr);
}

export default shrinkArray;
