import { describe, expect, it } from 'vitest';
import { isLowerCase } from '../LowerCaseString';

describe('isLowerCase', () => {
  it('should return true for lowercase strings', () => {
    expect(isLowerCase('hello')).toBe(true);
    expect(isLowerCase('world')).toBe(true);
  });

  it('should return false for uppercase strings', () => {
    expect(isLowerCase('HELLO')).toBe(false);
    expect(isLowerCase('WORLD')).toBe(false);
  });

  it('should return false for mixed case strings', () => {
    expect(isLowerCase('Hello')).toBe(false);
    expect(isLowerCase('wOrld')).toBe(false);
    expect(isLowerCase('HelloWorld')).toBe(false);
  });
});