const identify = require('./1_identity');

describe('Arguments validation: ', () => {
  test('Should not work for null: ', () => {
    expect(identify(null)).toBe(null);
  });
});
