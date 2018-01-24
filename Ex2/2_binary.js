function verifyType(arg) {
  if (typeof arg === 'number') {
    return true;
  }
  return false;
}


function validate(sum) {
  function wrapper(first, second) {
    if ((first === null) || (first === undefined)) {
      console.log(`Err1: ${first} argument supplied`);
      return first;
    }
    if ((second === null) || (second === undefined)) {
      console.log(`Err1: ${second} argument supplied`);
      return second;
    }
    const typeCheck = verifyType(first) && verifyType(second);
    if (!typeCheck) {
      return false;
    }
    return sum(first, second);
  }
  return wrapper;
}

const sum = (first, second) => first + second;

const sum1 = validate(sum);

module.exports = sum1;
