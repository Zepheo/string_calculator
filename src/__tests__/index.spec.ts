import assert from 'assert';
import { calculator, evalCalculator } from '../index';

describe('evalCalculator', () => {
  it('should take a string as an argument, (num operator num)', () => {
    assert.doesNotThrow(() => evalCalculator('2 + 3'));
  });

  it('should throw error if argument doesn\'t follow (num operator num)', () => {
    assert.throws(() => evalCalculator('2+3'));
  });

  it('should handle addition', () => {
    assert.strictEqual(evalCalculator('2 + 3'), 5);
    assert.strictEqual(evalCalculator('2 + 3 + 4'), 9);
    assert.strictEqual(evalCalculator('2 + 3 + -4'), 1);
  });

  it('should handle subtraction', () => {
    assert.strictEqual(evalCalculator('5 - 3'), 2);
    assert.strictEqual(evalCalculator('5 - 3 - 1'), 1);
  });

  it('should handle multiplication', () => {
    assert.strictEqual(evalCalculator('5 * 3'), 15);
    assert.strictEqual(evalCalculator('5 * 3 * -2'), -30);
  });

  it('should handle divition', () => {
    assert.strictEqual(evalCalculator('30 / 2'), 15);
    assert.strictEqual(evalCalculator('30 / 2 / 3'), 5);
  });
});

describe('calculator', () => {
  it('should take a string as an argument, (num operator num)', () => {
    assert.doesNotThrow(() => calculator('2 + 3'));
  });

  it('should throw error if argument doesn\'t follow (num operator num)', () => {
    assert.throws(() => calculator('2+3'));
  });

  it('should handle addition', () => {
    assert.strictEqual(calculator('2 + 3'), 5);
    assert.strictEqual(calculator('2 + 3 + 4'), 9);
  });

  it('should handle subtraction', () => {
    assert.strictEqual(calculator('7 - 3'), 4);
    assert.strictEqual(calculator('7 - 3 - 2'), 2);
  });

  it('should handle negative numbers with addition', () => {
    assert.strictEqual(calculator('4 + -3'), 1);
    assert.strictEqual(calculator('4 + -3 + -5'), -4);
  });

  it('should handle negative numbers with subtraction', () => {
    assert.strictEqual(calculator('4 - -3'), 7);
    assert.strictEqual(calculator('4 - -3 - -5'), 12);
  });

  it('should handle mix of negative and positive numbers with addition and subtraction', () => {
    assert.strictEqual(calculator('-4 + -3 - 3'), -10);
    assert.strictEqual(calculator('4 + -3 - -5'), 6);
    assert.strictEqual(calculator('4 + -3 - -5 - 3 + 6 + -7 + 20 - 55'), -33);
  });

  it('should handle multiplication', () => {
    assert.strictEqual(calculator('3 * 2'), 6);
    assert.strictEqual(calculator('3 * 2 * 3'), 18);
  });

  it('should handle multiplication with negative numbers', () => {
    assert.strictEqual(calculator('3 * 2'), 6);
    assert.strictEqual(calculator('3 * 2 * -3'), -18);
  });

  it('should handle divition', () => {
    assert.strictEqual(calculator('6 / 2'), 3);
    assert.strictEqual(calculator('6 / 2 / 3'), 1);
  });

  it('should handle divition with negative numbers', () => {
    assert.strictEqual(calculator('6 / 2'), 3);
    assert.strictEqual(calculator('6 / 2 / -3'), -1);
    assert.strictEqual(calculator('1 / 2'), 0.5);
  });

  it('should handle everything together', () => {
    assert.strictEqual(calculator('2 * 3 + 6 - 3 + -2 - -6 * 5 + 4 / 2'), 39);
  });
});
