const longDelay = require('./4_longDelay');

describe('Argument Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(longDelay(null)).toBe(null);
  });
});
