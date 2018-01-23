const longDelay = require('./4_longDelay');

describe('Argument Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(longDelay(null)).toBe(null);
  });

  test('Should not work for undefined arg: ', () => {
    expect(longDelay(undefined)).toBe(undefined);
  });
});
