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

  test('Should work for an empty array: ', () => {
    expect(identify([])).toEqual([]);
  });

  test('Should work for an empty object: ', () => {
    expect(identify({})).toEqual({});
  });

  test('Should work for an string: ', () => {
    expect(identify('Sat')).toEqual('Sat');
  });

  const func = function fn() {
    console.log('hello');
  };

  test('Should work for a function: ', () => {
    expect(identify(func)).toEqual(func);
  });
});
