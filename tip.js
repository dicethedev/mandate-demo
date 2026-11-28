function tip(amount, percent) {
  if (amount < 0 || percent < 0) {
    throw new RangeError('Amount and percent must be non-negative');
  }
  const t = amount * percent / 100;
  return Math.round(t * 100) / 100;
}

function splitBill(amount, percent, people) {
  if (amount < 0 || percent < 0) {
    throw new RangeError('Amount and percent must be non-negative');
  }
  if (!Number.isInteger(people) || people <= 0) {
    throw new RangeError('People must be a positive integer');
  }
  const total = amount + tip(amount, percent);
  const each = total / people;
  return Math.round(each * 100) / 100;
}

module.exports = { tip, splitBill };
