const applyOddsWithinRange = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

export default applyOddsWithinRange;
