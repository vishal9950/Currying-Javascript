const sum = require('./2_binary');

describe('Arguments Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(sum(null)).toBe(null);
  });
});
