const callAndApply = require('./5_callApply');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(callAndApply.caller(null)).toBe(null);
  });
});
