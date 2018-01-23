const someFunc = require('./3_delay.js');

describe('Arguments Validation: ', () => {
  test('Should not work for null: ', () => {
    expect(someFunc(null)).toBe(null);
  });

  test('Should not work for undefined: ', () => {
    expect(someFunc(undefined)).toBe(undefined);
  });
});

describe('Should add: ', () => {
  const sum = someFunc(2, 3);
  test('Two positive numbers 2, 3: ', () => {
    expect(sum()).toBe(5);
  });
});
