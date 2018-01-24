const curry = require('./6_curry');

describe('Argument validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(curry(null)).toBe(null);
  });

  test('Should not work for undefined args: ', () => {
    expect(curry(undefined)).toBe(undefined);
  });
});

describe('Functionality of curry function: ', () => {
  const fn = (a, b, c) => (a + b + c);
  const curriedFunc = curry(fn);
  test('Should add curry(fn)(1)(2)(3)', () => {
    expect(curriedFunc(1)(2)(3)).toBe(6);
  });

  test('Should add curriedFunc(1)(2, 3)', () => {
    expect(curriedFunc(1)(2, 3)).toBe(6);
  });

  test('Should add curriedFunc(1, 2, 3)', () => {
    expect(curriedFunc(1, 2, 3)).toBe(6);
  });
});
