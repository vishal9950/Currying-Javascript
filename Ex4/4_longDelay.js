total = 0;

const longDelay = (args) => {
  // if ((args === null) || (args === undefined)) {
  //   console.log(`Err1: ${args} arg supplied`);
  //   return args;
  // }
  if (typeof args !== 'number') {
    return total;
  }
  total += args;
  return longDelay;
};

module.exports = longDelay;
