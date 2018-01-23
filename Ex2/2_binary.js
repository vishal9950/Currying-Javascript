function sum(first, second) {
  if ((first === null) || (first === undefined)) {
    return first;
  }
  if ((second === null) || (second === undefined)) {
    return second;
  }
  return first + second;
}

module.exports = sum;
