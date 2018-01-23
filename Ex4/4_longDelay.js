const longDelay = (args) => {
  if ((args === null) || (args === undefined)) {
    console.log(`Err1: ${args} arg supplied`);
    return args;
  }
  return true;
};

module.exports = longDelay;
