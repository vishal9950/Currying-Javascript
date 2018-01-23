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
});
