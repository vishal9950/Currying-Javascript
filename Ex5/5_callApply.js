const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    if ((object === null) || (method === null) || (nameArg === null) || (ageArg === null)) {
      return null;
    }
    if ((object === undefined) || (method === undefined) || (nameArg === undefined)) {
      return undefined;
    }
    return method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier(object, method, argumentsArr) {
    if ((object === null) || (method === null) || (argumentsArr === null)) {
      return null;
    }
    if ((object === undefined) || (method === undefined) || (argumentsArr === undefined)) {
      return undefined;
    }
    return method.apply(object, argumentsArr);
  },
};

module.exports = callAndApply;
