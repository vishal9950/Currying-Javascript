const sum = require('./2_binary');

describe('Arguments Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(sum(null)).toBe(null);
  });

  test('Should not work for undefined arg: ', () => {
    expect(sum(undefined)).toBe(undefined);
  });

  test('Should not add two strings \'1\' + \'2\': ', () => {
    expect(sum('1', '2')).toBe(false);
  });
});

describe('Should add: ', () => {
  test('Two positive numbers 2 and 3: ', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('Two negative numbers -1 and -5: ', () => {
    expect(sum(-1, -5)).toBe(-6);
  });

  test('One positive 3 and one negative number -4: ', () => {
    expect(sum(3, -4)).toBe(-1);
  });
});
