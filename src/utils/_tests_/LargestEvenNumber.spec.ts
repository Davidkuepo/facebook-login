import { describe, expect, it } from 'vitest';
import { getLargestEvenNumber } from '../LargestEvenNumber';

describe('getLargestEvenNumber', () => {
  it('should handle an empty array', () => {
    const numbers: number[] = [];
    const expectedLargestEvenNumber = undefined;

    const largestEvenNumber = getLargestEvenNumber(numbers);

    expect(largestEvenNumber).toBe(expectedLargestEvenNumber);
  });

  it('should handle an array with no even numbers', () => {
    const numbers = [1, 3, 5, 7, 9];
    const expectedLargestEvenNumber = undefined;

    const largestEvenNumber = getLargestEvenNumber(numbers);

    expect(largestEvenNumber).toBe(expectedLargestEvenNumber);
  });

  it('should handle an array with negative numbers', () => {
    const numbers = [-2, -5, -8, -1, -4];
    const expectedLargestEvenNumber = -2;

    const largestEvenNumber = getLargestEvenNumber(numbers);

    expect(largestEvenNumber).toBe(expectedLargestEvenNumber);
  });
});