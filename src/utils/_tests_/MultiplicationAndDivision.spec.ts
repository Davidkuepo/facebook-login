import { describe, expect, it } from 'vitest';
import { calculateMultiplicationAndDivision } from '../MultiplicationAndDivision';

describe('calculateMultiplicationAndDivision', () => {
  it('should return the correct multiplication and division results', () => {
    const number1 = 10;
    const number2 = 5;
    const expectedMultiplication = 50;
    const expectedDivision = 2;

    const result = calculateMultiplicationAndDivision(number1, number2);

    expect(result.multiplication).toBe(expectedMultiplication);
    expect(result.division).toBe(expectedDivision);
  });
});