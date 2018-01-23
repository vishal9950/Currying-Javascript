const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    if ((object === null) || (method === null) || (nameArg == null) || (ageArg === null)) {
      return null;
    }
    return method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier(object, method, argumentsArr) {
    return method.apply(object, argumentsArr);
  },
};

module.exports = callAndApply;
