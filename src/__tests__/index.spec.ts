import assert from 'assert';
import { calculate, evalCalculate } from '../index';

describe('evalCalculate', () => {
  it('should take a string as an argument, (num operator num)', () => {
    assert.doesNotThrow(() => evalCalculate('2 + 3'));
  });

  it('should throw error if argument doesn\'t follow (num operator num)', () => {
    assert.throws(() => evalCalculate('2+3'));
  });

  it('should handle addition', () => {
    assert.strictEqual(evalCalculate('2 + 3'), 5);
    assert.strictEqual(evalCalculate('2 + 3 + 4'), 9);
    assert.strictEqual(evalCalculate('2 + 3 + -4'), 1);
  });

  it('should handle subtraction', () => {
    assert.strictEqual(evalCalculate('5 - 3'), 2);
    assert.strictEqual(evalCalculate('5 - 3 - 1'), 1);
  });

  it('should handle multiplication', () => {
    assert.strictEqual(evalCalculate('5 * 3'), 15);
    assert.strictEqual(evalCalculate('5 * 3 * -2'), -30);
  });

  it('should handle divition', () => {
    assert.strictEqual(evalCalculate('30 / 2'), 15);
    assert.strictEqual(evalCalculate('30 / 2 / 3'), 5);
  });
});

describe('calculate', () => {
  it('should take a string as an argument, (num operator num)', () => {
    assert.doesNotThrow(() => calculate('2 + 3'));
  });

  it('should throw error if argument doesn\'t follow (num operator num)', () => {
    assert.throws(() => calculate('2+3'));
  });

  it('should handle addition', () => {
    assert.strictEqual(calculate('2 + 3'), 5);
    assert.strictEqual(calculate('2 + 3 + 4'), 9);
  });

  it('should handle subtraction', () => {
    assert.strictEqual(calculate('7 - 3'), 4);
    assert.strictEqual(calculate('7 - 3 - 2'), 2);
  });

  it('should handle negative numbers with addition', () => {
    assert.strictEqual(calculate('4 + -3'), 1);
    assert.strictEqual(calculate('4 + -3 + -5'), -4);
  });

  it('should handle negative numbers with subtraction', () => {
    assert.strictEqual(calculate('4 - -3'), 7);
    assert.strictEqual(calculate('4 - -3 - -5'), 12);
  });

  it('should handle mix of negative and positive numbers with addition and subtraction', () => {
    assert.strictEqual(calculate('-4 + -3 - 3'), -10);
    assert.strictEqual(calculate('4 + -3 - -5'), 6);
    assert.strictEqual(calculate('4 + -3 - -5 - 3 + 6 + -7 + 20 - 55'), -33);
  });

  it('should handle multiplication', () => {
    assert.strictEqual(calculate('3 * 2'), 6);
    assert.strictEqual(calculate('3 * 2 * 3'), 18);
  });

  it('should handle multiplication with negative numbers', () => {
    assert.strictEqual(calculate('3 * 2'), 6);
    assert.strictEqual(calculate('3 * 2 * -3'), -18);
  });

  it('should handle divition', () => {
    assert.strictEqual(calculate('6 / 2'), 3);
    assert.strictEqual(calculate('6 / 2 / 3'), 1);
  });

  it('should handle divition with negative numbers', () => {
    assert.strictEqual(calculate('6 / 2'), 3);
    assert.strictEqual(calculate('6 / 2 / -3'), -1);
    assert.strictEqual(calculate('1 / 2'), 0.5);
  });

  it('should handle everything together', () => {
    assert.strictEqual(calculate('2 * 3 + 6 - 3 + -2 - -6 * 5 + 4 / 2'), 39);
  });
});
