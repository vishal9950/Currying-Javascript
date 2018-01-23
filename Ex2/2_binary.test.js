const sum = require('./2_binary');

describe('Arguments Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(sum(null)).toBe(null);
  });

  test('Should not work for undefined arg: ', () => {
    expect(sum(undefined)).toBe(undefined);
  });
});

describe('Should add: ', () => {
  test('Two positive numbers 2 and 3: ', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('Two negative numbers -1 and -5: ', () => {
    expect(sum(-1, -5)).toBe(-6);
  });
});
