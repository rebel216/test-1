const calculator = require('./calculator.js');

describe('Addition', () => {
  let num;
  beforeEach(() => {
    num = new calculator();
  });
  test('zero and positive number', () => {
    expect(num.add(0, 87)).toBe(87);
  });
  test('Negative and positive number', () => {
    expect(num.add(-19, 8)).toBe(-11);
  });
  test('Negative and negative number', () => {
    expect(num.add(-7, -28)).toBe(-35);
  });
});

describe('Subtraction', () => {
  let num;
  beforeEach(() => {
    num = new calculator();
  });
  test('zero and positive number', () => {
    expect(num.subtract(0, 87)).toBe(-87);
  });
  test('Negative and positive number', () => {
    expect(num.subtract(-19, 8)).toBe(-27);
  });
  test('Negative and negative number', () => {
    expect(num.subtract(-7, -28)).toBe(21);
  });
});

describe('Division', () => {
  let num;
  beforeEach(() => {
    num = new calculator();
  });
  test('zero and positive number', () => {
    expect(num.divide(0, 87)).toBe(0);
  });
  test('Negative and positive number', () => {
    expect(num.divide(-24, 8)).toBe(-3);
  });
  test('Negative and negative number', () => {
    expect(num.divide(-21, -7)).toBe(3);
  });
  test('Any number divide by zero', () => {
    expect(num.divide(29, 0)).toBe(Infinity);
  });
});

describe('Multiplication', () => {
  let num;
  beforeEach(() => {
    num = new calculator();
  });
  test('zero and positive number', () => {
    expect(num.multiply(0, 87)).toBe(0);
  });
  test('Negative and positive number', () => {
    expect(num.multiply(-19, 8)).toBe(-152);
  });
  test('Negative and negative number', () => {
    expect(num.multiply(-7, -28)).toBe(196);
  });
});
