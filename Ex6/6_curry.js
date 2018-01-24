const curry = (func) => {
  if (func === null) {
    console.log('Err1: null args supplied');
    return null;
  }
  return true;
};

module.exports = curry;
