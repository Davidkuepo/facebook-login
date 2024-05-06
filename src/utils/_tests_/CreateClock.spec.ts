import { describe, expect, it , vi} from 'vitest';
import { createClock } from '../CreateClock';

describe('createClock', () => {
  it('should log the current time every second', async () => {
    const logOutput: string[] = [];
    console.log = vi.fn((...args) => {
      logOutput.push(args.join(' '));
    });

    createClock();
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(logOutput.length).toBeGreaterThanOrEqual(4);
    const timeRegex = /^\d{2}:\d{2}:\d{2}$/;
    for (const entry of logOutput) {
      expect(entry).toMatch(timeRegex);

    }
  });
});