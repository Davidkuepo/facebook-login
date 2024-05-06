import { describe, expect, it } from 'vitest';
import { daysUntilNextChristmas } from '../NextChristmas';

describe('daysUntilNextChristmas', () => {
  it('should return the correct number of days until next Christmas', () => {
    const mockDate = new Date(2023, 8, 1);
    const originalDate = global.Date;
    global.Date = class extends Date {
      constructor() {
        super();
        return mockDate;
      }
    } as any;
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmas = new Date(currentYear, 11, 25);
    if (today > christmas) {
      christmas.setFullYear(currentYear + 1);
    }
    const oneDay = 24 * 60 * 60 * 1000;
    const expectedDaysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);
    const daysLeft = daysUntilNextChristmas();
    expect(daysLeft).toBe(expectedDaysLeft);
    global.Date = originalDate;
  });
});