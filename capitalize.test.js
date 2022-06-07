const capitalize = require('./capitalize.js');

test('Capitalize the first letter of a string', () => {
  expect(capitalize('addisu')).toBe('Addisu');
});
