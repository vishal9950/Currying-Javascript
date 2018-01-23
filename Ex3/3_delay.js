const verifyIfNull = (arg) => {
  if (arg === null) {
    return false;
  }
  return true;
};

const someFunc = (first) => {
  const nullCheck = verifyIfNull(first);
  if (!nullCheck) {
    console.log('Err1: null argument supplied');
    return null;
  }
  return true;
};

module.exports = someFunc;
