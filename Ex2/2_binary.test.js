const sum = require('./2_binary');

describe('Arguments Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(sum(null)).toBe(null);
  });

  test('Should not work for undefined arg: ', () => {
    expect(sum(undefined)).toBe(undefined);
  });
});
