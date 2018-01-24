const curry = (func) => {
  if ((func === null) || (func === undefined)) {
    console.log(`Err1: ${func} args supplied`);
    return func;
  }
  return true;
};

module.exports = curry;
