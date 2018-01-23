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
  const sum = someFunc(2);
  test('Two positive numbers 2, 3: ', () => {
    expect(sum(3)).toBe(5);
  });

  const sum1 = someFunc(-1);
  test('Two negative numbers -1, -2: ', () => {
    expect(sum1(-2)).toBe(-3);
  });

  const sum2 = someFunc(-2);
  test('One negative, one positive -2, 6: ', () => {
    expect(sum2(6)).toBe(4);
  });
});
