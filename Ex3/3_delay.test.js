const someFunc = require('./3_delay.js');

describe('Arguments Validation: ', () => {
  test('Should not work for null: ', () => {
    expect(someFunc(null)).toBe(null);
  });

  test('Should not work for undefined: ', () => {
    expect(someFunc(undefined)).toBe(undefined);
  });
});