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

const someFunc = (first, second) => {
  const nullCheck = verifyIfNull(first) && verifyIfNull(second);
  if (!nullCheck) {
    console.log('Err1: null argument supplied');
    return null;
  }
  const undefCheck = verifyIfUndef(first) && verifyIfUndef(second);
  if (!undefCheck) {
    console.log('Err2: undefined arg supplied');
    return undefined;
  }
  const sum = () => first + second;
  return sum;
};

module.exports = someFunc;
