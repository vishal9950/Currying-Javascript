const verifyIfNull = (arg) => {
  if (arg === null) {
    return false;
  }
  return true;
};

const verifyIfUndef = (arg) => {
  if (arg === undefined) {
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
  const undefCheck = verifyIfUndef(first);
  if (!undefCheck) {
    console.log('Err2: undefined arg supplied');
    return undefined;
  }
  return true;
};

module.exports = someFunc;
