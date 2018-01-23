const identify = require('./1_identity');

describe('Arguments validation: ', () => {
  test('Should not work for null: ', () => {
    expect(identify(null)).toBe(null);
  });

  test('Should not work for undefined: ', () => {
    expect(identify(undefined)).toBe(undefined);
  });
});

describe('Functionality of identify function: ', () => {
  test('Should work for a number: ', () => {
    expect(identify(2)).toBe(2);
  });
});
