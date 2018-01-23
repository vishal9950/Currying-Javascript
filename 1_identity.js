function validateInput(input) {
  if (input === null || input === undefined) {
    return false;
  }
  return true;
}

function identify(argument) {
  const check1 = validateInput(argument);
  if (!check1) {
    return argument;
  }
  return true;
}

module.exports = identify;
