const { stringLength, reverseString } = require('./app.js');

test('Take a string and return count', () => {
  expect(stringLength('Addisu')).toBe(6);
});

test('Not takes a proper string length and throws error', () => {
  expect(() => stringLength('Addisuhaile')).toThrow();
});

test('Reverse the string', () => {
  expect(reverseString('Addisu')).toBe('usiddA');
});
