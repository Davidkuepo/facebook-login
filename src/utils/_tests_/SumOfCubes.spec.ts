import { describe, expect, it } from 'vitest';
import { sumOfCubes } from '../SumOfCubes';

describe('sumOfCubes', () => {
  it('should compute the sum of cubes correctly', () => {
    const inputNumber = 5;
    const expectedSum = 1 + 8 + 27 + 64 + 125;

    const result = sumOfCubes(inputNumber);

    expect(result).toBe(expectedSum);
  });

  it('should return 0 when given 0 as input', () => {
    const inputNumber = 0;
    const expectedSum = 0;

    const result = sumOfCubes(inputNumber);

    expect(result).toBe(expectedSum);
  });
});