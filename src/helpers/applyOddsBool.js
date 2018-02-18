//takes a number between 0 and 100,  returns true or false depending on that as a percentage
//of probability

const applyOddsBool = num => {
  const randomResult = Math.round(Math.random() * 100)
  const resultbool = randomResult <= num ? true :false;

  return resultbool;
};

export default applyOddsBool;
