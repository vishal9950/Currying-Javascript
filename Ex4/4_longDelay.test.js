const longDelay = require('./4_longDelay');

describe('Argument Validation: ', () => {
  test('Should not work for null arg: ', () => {
    expect(longDelay(null)).toBe(0);
  });

  test('Should not work for undefined arg: ', () => {
    expect(longDelay(undefined)).toBe(0);
  });
});

describe('Working of function longDelay: ', () => {
  test('Should work for one argument: ', () => {
    expect(typeof longDelay(1)).toBe('function');
  });

  test('Should work for three arguments: ', () => {
    expect(typeof longDelay(10)).toBe('function');
  });

  test('Should give total when no arg passed: ', () => {
    expect(longDelay()).toBe(11);
  });
});
