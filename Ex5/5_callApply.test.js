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
    expect(typeof callAndApply.caller({}, fn, [], [], [])).toBe('object');
  });
});
