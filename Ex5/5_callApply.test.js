const callAndApply = require('./5_callApply');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(callAndApply.caller(null)).toBe(null);
  });

  test('Should not work for undefined args: ', () => {
    expect(callAndApply.caller(undefined)).toBe(undefined);
  });

  test('Should not work for null args: ', () => {
    expect(callAndApply.applier(null)).toBe(null);
  });

  test('Should not work for undefined args: ', () => {
    expect(callAndApply.applier(undefined)).toBe(undefined);
  });
});

describe('Caller function: ', () => {
  const fn = x => x;
  test('Should work for proper args (all empty): ', () => {
    expect(typeof callAndApply.caller({}, fn, [], [], [])).toEqual('object');
  });

  const obj = {
    hello: 1,
  };
  const nameArg = ['xyz', 'def'];
  const ageArg = [20, 30];
  const tShirtSizeArg = ['L', 'XL'];
  test('Should work for proper args (have real values): ', () => {
    expect(typeof callAndApply.caller(obj, fn, nameArg, ageArg, tShirtSizeArg)).toEqual('object');
  });
});
