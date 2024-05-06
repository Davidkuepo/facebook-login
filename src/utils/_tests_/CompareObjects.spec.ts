import { describe, expect, it } from 'vitest';
import { compareObjects } from '../CompareObjects';

describe('compareObjects', () => {
  it('should return true when objects have equivalent property values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };

    const result = compareObjects(obj1, obj2);

    expect(result).toBe(true);
  });

  it('should return false when objects have different property values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'Jane', age: 25 };

    const result = compareObjects(obj1, obj2);

    expect(result).toBe(false);
  });

  it('should return false when objects have different number of properties', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30, country: 'Cameroun' };

    const result = compareObjects(obj1, obj2);

    expect(result).toBe(false);
  });

  it('should handle objects with different property order', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { age: 30, name: 'John' };

    const result = compareObjects(obj1, obj2);

    expect(result).toBe(true);
  });
});