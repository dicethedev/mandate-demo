const { test } = require('node:test');
const assert = require('node:assert');
const { tip, splitBill } = require('./tip');

test('tip calculation', () => {
  assert.strictEqual(tip(50, 18), 9);
});

test('split bill calculation', () => {
  assert.strictEqual(splitBill(100, 20, 3), 40);
});

test('negative amount throws', () => {
  assert.throws(() => tip(-10, 10), RangeError);
});

test('negative percent throws', () => {
  assert.throws(() => tip(10, -5), RangeError);
});

test('invalid people throws', () => {
  assert.throws(() => splitBill(100, 10, 0), RangeError);
  assert.throws(() => splitBill(100, 10, -1), RangeError);
  assert.throws(() => splitBill(100, 10, 2.5), RangeError);
});
