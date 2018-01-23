function validateInput(input) {
  if (input === null || input === undefined) {
    return false;
  }
  return true;
}

function identify(argument) {
  if (!validateInput(argument)) {
    return argument;
  }
  return argument;
}

module.exports = identify;
