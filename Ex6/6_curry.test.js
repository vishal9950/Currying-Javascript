const curry = require('./6_curry');

describe('Argument validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(curry(null)).toBe(null);
  });
});