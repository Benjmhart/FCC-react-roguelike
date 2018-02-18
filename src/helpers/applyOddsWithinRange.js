const applyOddsWithinRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default applyOddsWithinRange;
