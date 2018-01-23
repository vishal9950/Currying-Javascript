const longDelay = (args) => {
  if ((args === null)) {
    console.log('Err1: null arg supplied');
    return null;
  }
  return true;
};

module.exports = longDelay;
